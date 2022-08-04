import _ from 'lodash';
import * as templateAdder from './templateAdder';
const equalityIfOperators = ['equalsTo', 'notEqualsTo']
export const ifOptions = [...equalityIfOperators, 'contains', 'lessThan', 'greaterThan', 'greaterThanOrEqualsTo', 'lessThanOrEqualsTo'];

function generateClassName(className) {
  if (className && className.toLowerCase().indexOf('manipulator') !== -1) {
    return '@' + className.charAt(0).toLowerCase() + className.slice(1) + '.';
  } else {
    return '#';
  }
}

function generateArgumentName(argument, compareOperatorFlag = false, dateFormat) {
  let arg = argument.value;

  if (!arg) {
    return "";
  }

  //unblocking HF sites "null" hack -> "null" is considered as null programmatic element
  if ("null" === arg) {
    return null;
  }

  arg = arg.replace(/'/g, "''");
  if (compareOperatorFlag) {
    return "@typeManipulators.toInteger(" + argument.value + ")";
  } else if (argument && argument.type && argument.type.toLowerCase() === 'custom'
    && argument.dataType && (argument.dataType.toLowerCase() === 'string'
      || argument.dataType.toLowerCase() === 'charsequence')) {

    // searching for [] in the argument.value , 
    // if [] present than don't consider it as string, just send directly those value 
    // because its array value i.e like temp[1] not "temp[1]"

    if (argument.value && argument.value.search(/\[.*?\]/) !== -1) { // regEx for matching []
      // if found than return directly without adding " " around the argument.value
      return "@typeManipulators.toString(" + arg + ")";
    }

    // otherwise send it like string
    return "@typeManipulators.toString(" + "'" + arg + "'" + ")";
  }
  else if (argument && argument.type && argument.type.toLowerCase() === 'custom'
    && argument.dataType && argument.dataType.toLowerCase() === 'int') {
    return "@typeManipulators.toInteger(" + argument.value + ")";
  }
  else if (argument && argument.type && argument.type.toLowerCase() === 'variable' && argument.dataType) {
    if (argument.dataType.toLowerCase() === 'int')
      return "@typeManipulators.toInteger(" + argument.value + ")";
    if (argument.dataType.toLowerCase() === 'string' || argument.dataType.toLowerCase() === 'charsequence')
      return "@typeManipulators.toString(" + arg + ")";
    return argument.value;
  }
  else if (argument && argument.value && argument.value.toLowerCase() === ("sysdate") && dateFormat) {
    return "@dateManipulators.getSysdate(" + "'" + dateFormat + "'" + ")";
  }
  else {
    return argument.value;
  }
}

function generateOperator(value) {
  if (value) {
    switch (value.toLowerCase()) {
      case 'lessthan':
        return '<';
      case 'greaterthan':
        return '>';
      case 'notequalsto':
        return '!=';
      case 'equalsto':
        return '==';
      case 'greaterthanorequalsto':
        return '>=';
      case 'lessthanorequalsto':
        return '<=';
      default:
        return value;
    }
  }
}

export function generateSPEL(postManipulations) {

  function recurseForSpel(statement) {
    if (!statement) {
      return statement;
    }
    if (statement.methodName === '' && statement.arguments.length === 0) {
      return statement;
    }

    let expression = "";

    if (statement.methodName === 'if') {
      if (statement.arguments[1].value?.toLowerCase() === 'contains') {
        expression = "@stringManipulators.contains(" + generateArgumentName(statement.arguments[0]) + "," + generateArgumentName(statement.arguments[2]) + ")";
      } else if (!equalityIfOperators.includes(statement.arguments[1].value)) {
        expression = generateArgumentName(statement.arguments[0], true) + " " + generateOperator(statement.arguments[1].value) + " " + generateArgumentName(statement.arguments[2], true);
      } else {
        expression = generateArgumentName(statement.arguments[0]) + " " + generateOperator(statement.arguments[1].value) + " " + generateArgumentName(statement.arguments[2]);
      }
    } else if (statement.methodName === 'assign') {
      expression = generateArgumentName(statement.arguments[0]) + " = " + generateArgumentName(statement.arguments[1]);
    } else if (statement.methodName === 'clearValue') {
      expression = generateArgumentName(statement.arguments[0]) + " = " + "@typeManipulators.toString(' ')";
    } else {

      let dateFormat = null;

      statement.arguments.forEach(argElement => {
        if (argElement.type === 'CUSTOM' && argElement.name === 'format') {
          dateFormat = argElement.value;
        }
      });

      expression = expression + generateClassName(statement.methodClass) + statement.methodName + "(";

      statement.arguments.forEach((argElement, argIndex) => {
        expression = expression + generateArgumentName(argElement, false, dateFormat);
        if (argIndex !== statement.arguments.length - 1)
          expression = expression + ",";
      });

      expression = expression + ")";
    }

    statement.expression = expression;

    if (statement.nestedStatements) {
      statement.nestedStatements.forEach((nestedStatement, nsi) => {
        statement.nestedStatements[nsi] = JSON.parse(JSON.stringify(recurseForSpel(nestedStatement)));
      });
    }
    return statement;
  }

  postManipulations.manipulations.forEach((statement, si) => {
    postManipulations.manipulations[si] = JSON.parse(JSON.stringify(recurseForSpel(statement)));
  });

  return postManipulations;
}

export function populateArgType({ inputValue, options }) {
  let type = 'CUSTOM';
  let optionObj = _.find(options, o => o.value === inputValue);
  if (optionObj !== undefined && optionObj !== null && optionObj.type !== undefined) {
    type = optionObj.type
  }
  return type;
}

export function getMaxCountValue(manipulations) {
  let tempHolderArray = {};
  function findNested(arr) {
    if (arr == null) {
      return;
    }
    for (let i in arr) {
      if (arr[i].variable != null) {
        tempHolderArray[j] = arr[i].variable;
        j++;
      }
      findNested(arr[i].nestedStatements);
    }
  }

  let j = 0;
  for (let i in manipulations) {
    tempHolderArray[j] = manipulations[i].variable;
    j++;
    findNested(manipulations[i].nestedStatements);
  }
  let maxTemp = 0;
  for (let i = 0; i < j; i++) {
    if (tempHolderArray[i] != null)
      if (tempHolderArray[i].startsWith('Temp')) {
        let currentTemp = parseInt(tempHolderArray[i].substr(4));
        if (currentTemp > maxTemp) {
          maxTemp = currentTemp;
        }
      }
  }
  return maxTemp;
}


export function processForAssignFunction({ postManipulations, helperContext }) {
  // this.props.helperContext  -> fieldName
  if (helperContext && helperContext.fieldName) {
    let contextField = helperContext.fieldName;
    let newvalueArr = JSON.parse(JSON.stringify(postManipulations.manipulations));
    let defaultAssgin = JSON.parse(JSON.stringify(templateAdder.defaultAssignManipulationElement));
    defaultAssgin.arguments[0].value = contextField;
    let autoAssignFlag = false;
    let autoAssignIndex = -1;
    let defaultAssignFlag = false;
    if (newvalueArr.length > 0) {
      //auto assign check happens
      //For If condition it should not happen
      function findNestedAssign(arr) {
        if (arr == null) {
          return false;
        }
        let retrunValue = {};

        for (let i in arr) {
          if (arr[i].methodName !== null)
            if (((arr[i].methodName === "assign" || arr[i].methodName === "clearValue") && arr[i].type !== 'auto'))
              return true;
          retrunValue[i] = findNestedAssign(arr[i].nestedStatements)
        }
        for (let i in retrunValue) {
          if (retrunValue[i] == true) {
            return true;
          }
        }
        return false;
      }

      newvalueArr.forEach((element, ind) => {
        if (element.methodName === "assign" && element.type === 'auto') {
          autoAssignFlag = true; autoAssignIndex = ind;
        }
        else if (((element.methodName === "assign" || element.methodName === "clearValue") && element.type !== 'auto')) {
          defaultAssignFlag = true;
        }

        if (findNestedAssign(element.nestedStatements)) {
          defaultAssignFlag = true;
        }

      });

      if (helperContext.fieldName === 'containerType') {
        //In Order to remove auto assign for conatinerBasedManipulations
        defaultAssignFlag = true;
      }
      let lastObject = newvalueArr[newvalueArr.length - 1];
      let secondLastObj = null
      if (newvalueArr.length >= 2) {
        secondLastObj = newvalueArr[newvalueArr.length - 2];
      }

      if (!defaultAssignFlag) {
        if (lastObject !== null && lastObject !== undefined && lastObject.hasOwnProperty('variable')
          && lastObject.variable.length > 0) {
          defaultAssgin.expression = contextField + "=" + lastObject.variable;
          newvalueArr.push(defaultAssgin);
        }
      }
      if (autoAssignFlag) {
        if (secondLastObj !== null && secondLastObj !== undefined && secondLastObj.hasOwnProperty('variable')
          && secondLastObj.variable.length > 0) {
          defaultAssgin.expression = contextField + "=" + secondLastObj.variable;
          newvalueArr[newvalueArr.length - 1] = defaultAssgin;
        }
      }

      //remove auto-assign if clearValue is present
      if (defaultAssignFlag && autoAssignFlag) { //both assign are present 
        //remove auto assign
        if (autoAssignIndex !== -1) {
          newvalueArr.splice(autoAssignIndex, 1);
        }
      }

      postManipulations.manipulations = newvalueArr;
    }
  }
  return postManipulations;
}

export function getFunctionNames(item) {
  let output = '';
  switch (item) {
    case 'ConditionalOpertaion':
      output = 'Conditional Functions';
      break;
    case 'DateManipulators':
      output = 'Date Functions';
      break;
    case 'StringManipulators':
      output = 'String Functions';
      break;
    case 'NumberManipulators':
      output = 'Number Functions';
      break;
    default:
      output = 'Commmon Functions';
  }
  return output;
}


export function getDependentManipulationData({ manipulations }) {
  let recurseData = [];
  function recurseToGetAllDependency(statements, path) {
    statements.forEach((sd, si) => {
      if (sd.arguments) {
        sd.arguments.forEach((ad, ai) => {
          if (ad.type && ad.type === "FIELD") {
            recurseData.push({
              field: ad.value,
              path: `${path}[${si}].arguments[${si}]`
            });
          }
        })
      }
      if (sd.nestedStatements) {
        path = `${path}[${si}].nestedStatements`;
        recurseToGetAllDependency(sd.nestedStatements, path);
      }
    });
  }

  recurseToGetAllDependency(manipulations, 'manipulations');

  //make uniq from field;
  recurseData = _.uniqBy(recurseData, 'field');
  return recurseData;
}


export function retriveAppropriateFieldValueFromGatheredData({ gatheredDataFromPage }) {

  let fieldData = [];
  if (gatheredDataFromPage && gatheredDataFromPage.states) {
    gatheredDataFromPage.states.forEach((sd, si) => {
      if (sd.fields) {
        sd.fields.forEach((fd, fi) => {
          let field = fd.name;
          let value = "";
          if (fd.variations) {
            fd.variations.forEach((vd, vi) => {
              if (vd.value && vd.isFieldFound) {
                value = vd.value;
              }
            })
          }
          fieldData.push({ field, value });
        });
      }
      if (sd.fieldsGroupings) {
        sd.fieldsGroupings.forEach((fgd, fgi) => {
          if (fgd.variations) {
            fgd.variations.forEach((vd, vi) => {
              if (vd.rows) {
                let index = -1, rowWithMaxFields = 0;
                vd.rows.forEach((rd, ri) => {
                  if (rd.fields && rd.fields.length > rowWithMaxFields) {
                    index = ri;
                    rowWithMaxFields = rd.fields.length;
                  }
                });
                if (index !== -1) {
                  if (vd.rows[index].fields) {
                    vd.rows[index].fields.forEach((rowField, rowFieldIndex) => {
                      fieldData.push({
                        field: rowField.name ? rowField.name : "",
                        value: rowField.value ? rowField.value : ""
                      });
                    });
                  }
                }
              }
            });
          }
        })
      }
    });
  }
  if (gatheredDataFromPage && gatheredDataFromPage.manualData) {
    gatheredDataFromPage.manualData.forEach((md, mi) => {
      fieldData.push({ field: md.field, value: md.value });
    });
  }
  return fieldData;
}

export function fillDependenDataWithScrapedValue({ dependentDataArr, gatheredDataFromPage }) {
  let scrapedData = retriveAppropriateFieldValueFromGatheredData({ gatheredDataFromPage });

  let filledValue = [];
  if (dependentDataArr) {
    dependentDataArr.forEach((dd, di) => {
      filledValue[di] = dd;
      let scrappedMapping = scrapedData.find(o => o.field === dd.field);
      if (scrappedMapping) {
        filledValue[di].value = scrappedMapping.value;
      }
    });
  }

  return filledValue;
}

export function findOutputForPath({ manipulationServiceData, uuid }) {
  let mappingValue = "Output";
  if (manipulationServiceData && manipulationServiceData.results && manipulationServiceData.results[0]) {
    let result = manipulationServiceData.results[0];
    if (result.stepResults) {
      let manipItemObj = result.stepResults.find(o => o.uuid === uuid);
      if (manipItemObj) {
        mappingValue = manipItemObj.result
      }
    }
  }
  return mappingValue;
}

/**
 * This function will remove all nbsp characters from the input value and put a space in place of each of the removed characters. This is required since java code is not able to differentiate between &nbsp and space characters.
 * @param {} value to be manipulated 
 */
export function normaliseWhiteSpace({ value }) {
  return value ? value.replace(/\u00a0/g, ' ') : value;
}