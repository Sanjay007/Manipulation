import _ from 'lodash';
import { generateUUID } from './uuidGenerator';
// import ElementFinder from './libs/elementHighlighter/elementFinder';
//import * as domTools from '@yodlee/dom-tools';
import { pruneEmpty } from './pruneEmpty';
// const { elementFinder } = domTools.queryLib;
// const ElementFinder = elementFinder.default;

/**
 * This method avoids repeated null-checks for nested properties
 * @param { Object} obj - The object 
 * @param { String} key - The nested path whose existence is to be checked
 * @returns true if the path in object exists with some non-empty value else false
 */
export const checkIfPathExists = function (obj, key) {
  let tokens = key.split('.');

  if (!obj) {
    return false;
  }

  for (let i = 0; i < tokens.length; i++) {
    if (obj.hasOwnProperty(tokens[i])) {
      obj = obj[tokens[i]];
    }

    //possible that tokens[i] is an array element in path e.g. a.b[2].c , here tokens[1] = b[2]
    else if (tokens[i].match("^.*\\[\\d+\\]$")) {
      let index = tokens[i].substring(tokens[i].indexOf("[") + 1, tokens[i].indexOf("]"))
      tokens[i] = tokens[i].substring(0, tokens[i].indexOf("["))
      if (obj.hasOwnProperty(tokens[i])) {
        obj = obj[tokens[i]][index];
      }
    }

    else {
      return false;
    }

    if (!obj) {
      return false;
    }
  }

  return true;
}



export const customStringify = function (v) {
  const cache = new Set();
  return JSON.stringify(v, function (key, value) {
    if (typeof value === 'object' && value !== null) {
      if (cache.has(value)) {
        // Circular reference found
        try {
          // If this value does not reference a parent it can be deduped
          return JSON.parse(JSON.stringify(value));
        } catch (err) {
          // discard key if value cannot be deduped
          return;
        }
      }
      // Store value in our set
      cache.add(value);
    }
    return value;
  });
};

// export const validateLocatorType = (parentContext, formInfo, frameDoc) => {
//   try {
//     // Copying the FormInfo to originalFormInfo for further updates
//     let originalFormInfo = JSON.parse(JSON.stringify(formInfo));
//     if (parentContext.toLowerCase() === 'field' || (parentContext.toLowerCase() === 'navigation')
//       || (parentContext.toLowerCase() === 'preActions') || (parentContext.toLowerCase() === 'identifiers')) {
//       let element = ElementFinder.process({ doc: frameDoc, context: frameDoc, locator: formInfo.locator });
//       //Element will be null only if there is mismatch in locatorType and locator, as exception will raised and null will be returned from ElementFinder process method.      
//       //Not validating JSOUP locators as no alternative locator can be given.
//       if (element == null && formInfo.locator.locatorType !== 'JSOUP') {
//         formInfo.locator.locatorType = formInfo.locator.locatorType === 'XPATH' ? 'CSSPATH' : 'XPATH';
//         element = ElementFinder.process({ doc: frameDoc, context: frameDoc, locator: formInfo.locator });
//         if (element == null) {
//           //If locator is invalid after changing the locatorType. Ol la
//           formInfo = originalFormInfo;
//         }
//       }
//     }
//     //For parentContext List or Table, locator,loop locator and tableheader locator are validated
//     else if (parentContext.toLowerCase() === 'list' || (parentContext.toLowerCase() === 'table')) {
//       let element = ElementFinder.process({ doc: frameDoc, context: frameDoc, locator: formInfo.locator });
//       if (element == null && formInfo.locator.locatorType !== 'JSOUP') {
//         formInfo.locator.locatorType = formInfo.locator.locatorType === 'XPATH' ? 'CSSPATH' : 'XPATH';
//         element = ElementFinder.process({ doc: frameDoc, context: frameDoc, locator: formInfo.locator });
//         if (element == null) {
//           formInfo = originalFormInfo;
//         }
//       }
//       if (element !== null) {
//         originalFormInfo = formInfo;
//         //forming the loopLocator for validation
//         let updatedLocator = {
//           path: formInfo.metadata.loopLocator.path + ' ' + formInfo.metadata.innerTable.loopLocator.path,
//           locatorType: formInfo.metadata.loopLocator.locatorType
//         }
//         element = ElementFinder.process({ doc: frameDoc, context: frameDoc, locator: updatedLocator });

//         if (element == null && formInfo.locator.locatorType !== 'JSOUP') {
//           formInfo.metadata.loopLocator.locatorType = formInfo.metadata.loopLocator.locatorType === 'XPATH' ? 'CSSPATH' : 'XPATH';
//           updatedLocator = {
//             path: formInfo.metadata.loopLocator.path + ' ' + formInfo.metadata.innerTable.loopLocator.path,
//             locatorType: formInfo.metadata.loopLocator.locatorType
//           }
//           element = ElementFinder.process({ doc: frameDoc, context: frameDoc, locator: updatedLocator });

//           if (element == null) {
//             formInfo = originalFormInfo;
//           }
//         }
//       }
//       if (this.state.activeIndex === 'tableheader') {
//         originalFormInfo = formInfo;
//         element = ElementFinder.process({ doc: frameDoc, context: frameDoc, locator: formInfo.metadata.headerLocator });

//         if (element == null && formInfo.locator.locatorType !== 'JSOUP') {

//           formInfo.metadata.headerLocator.locatorType = formInfo.metadata.headerLocator.locatorType === 'XPATH' ? 'CSSPATH' : 'XPATH';
//           element = ElementFinder.process({ doc: frameDoc, context: frameDoc, locator: formInfo.metadata.headerLocator });
//           if (element == null) {
//             formInfo = originalFormInfo;
//           }
//         }
//       }
//     }
//   }
//   catch (e) {
//     //Any exception will return null and the originalFormInfo will be retained.
//     console.error("Something unexpected", e);
//     return null;
//   }
//   return formInfo;
// }

export const checkForSameLocatorFromCommandInput = (data1, data2) => {
  try {
    if (data1.locator.path === data2.locator.path) {
      return true;
    }
  } catch (e) { }
  return false
}
export const isUUIDPartOfData = (uuid, data) => {
  let flatData = flatten(data);
  for (let i in flatData) {
    if (flatData[i]?.toString().includes(uuid)) {
      return true;
    }
  }
  return false;
}

export const getSubTypeByName = (stateList, nameOfState) => {
  let subTypes = [];
  stateList.forEach((element) => {
    if (element.name === nameOfState && element.hasOwnProperty('subStates')
      && element.subStates.length > 0) {
      element.subStates.forEach((sd, si) => {
        subTypes.push({ key: sd.name, text: sd.title, value: sd.name });
      })
    }
  });
  return subTypes;
}

export const getStateTitleByName = (stateList, nameOfState) => {
  let selectedTitle = stateTitleCase(nameOfState, "_", " ")
  stateList.forEach((element) => {
    if (element.name === nameOfState) {
      selectedTitle = element.title;
    }
  });
  return selectedTitle;
}

export const makeArray = (str) => {
  if (str !== null && str !== undefined && str.length > 0) {
    return str.split(",");
  }
  return [];
}

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export function stateIdToNameTitleCase(str) {
  str = stateTitleCase(str, "_", " ");
  let arr = str.split(" ");
  arr.splice(0, 1);
  arr.splice(arr.length - 1, 1);
  return arr.join(" ");
}

export function stateIdToNameTitleCaseWithContainer(str) {
  str = stateTitleCase(str, "_", " ");
  let arr = str.split(" ");
  if (arr[0] === "Base" || str.includes("Summary") || str.includes("Login") || str.includes("Logout")) {
    arr.splice(0, 1);
  }
  arr.splice(arr.length - 1, 1);
  return arr.join(" ");
}

export function stateTitleCase(str, search, replacement) {
  str = str.split(search).join(replacement);
  str = str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
  return str;
}

export function replaceAndTitle(str, search, replacement) {
  str = str.split(search).join(replacement);
  str = str.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1");
  str = str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });

  return str;
}

export function findIfCustom(field, fieldList) {
  let thisFlag = true;
  fieldList.forEach((fD, fI) => {
    if (fD.name === field) {
      thisFlag = false;
    }
  });
  return thisFlag;
}

export function processForTextFieldDisable(fieldName, fields) {
  let amountFlagConfigured = false;
  let creditDebitFieldConfiured = false;
  fields.forEach((fdata) => {
    if (fdata.name.includes('_amount')) {
      amountFlagConfigured = true;
    }
    if (fdata.name.includes('_transactionAmountCredit') || fdata.name.includes('_transactionAmountDebit')) {
      creditDebitFieldConfiured = true;
    }
  });
  if (amountFlagConfigured) { //disbale all credit debit fields
    if (fieldName.includes('_transactionAmountCredit') || fieldName.includes('_transactionAmountDebit')) {
      return true
    }
  } else if (creditDebitFieldConfiured) { //disbale amountfield
    if (fieldName.includes('_amount')) {
      return true;
    }
  }
  return false;
}

export function titleForFields(str, containerType) {
  if (str) {
    if (containerType) {
      str = (str.toLowerCase().includes('fullaccountnumber') && !str.toLowerCase().includes('fullAccountNumberDeprecated')) ? containerType.toLowerCase().includes('bank') ? 'Payment Account Number' : 'Unmasked Account Number' : str
    }
    if (str.includes('_')) {
      str = str.substr(str.lastIndexOf('_') + 1, str.length);
    }
    str = str.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1")
    str = (str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }))
    str = str.trim();
    str = str.replace(/\s+/g, " ");
    return str;
  } else {
    return "";
  }
}

export function replaceQuestionTag(manipulations) {
  if (manipulations && manipulations.length > 0) {
    let manipulationsCpy = JSON.parse(JSON.stringify(manipulations));
    manipulationsCpy.forEach(item => {
      if (item.expression) {
        const searchRegExp = new RegExp('Question', 'g')
        let expr = item.expression;
        item.expression = expr.replace(searchRegExp, 'value');
      }
      if (item.nestedStatements && item.nestedStatements.length > 0)
        item.nestedStatements = replaceQuestionTag(item.nestedStatements);
    })
    return manipulationsCpy;
  }
  return manipulations;
}


export function toTitleCase(str) {
  str = str.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1")
  return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}

export function array_move(arr, old_index, new_index) {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr; // for testing
};



export function flatten(data) {
  var result = {};
  function recurse(cur, prop) {
    if (Object(cur) !== cur) {
      result[prop] = cur;
    } else if (Array.isArray(cur)) {
      for (var i = 0, l = cur.length; i < l; i++)
        recurse(cur[i], prop + "[" + i + "]");
      if (l == 0)
        result[prop] = [];
    } else {
      var isEmpty = true;
      for (var p in cur) {
        isEmpty = false;
        recurse(cur[p], prop ? prop + "." + p : p);
      }
      if (isEmpty && prop)
        result[prop] = {};
    }
  }
  recurse(data, "");
  return result;
}

// export function populateForm(populateTo, populateFrom) {
//     let src = flatten(JSON.parse(JSON.stringify(populateFrom)));
//     let dst = flatten(JSON.parse(JSON.stringify(populateTo)));
//     let finalObj = {};
//     for (let i in dst) {
//         finalObj[i] = dst[i]
//         if(src.hasOwnProperty(i))
//             finalObj[i] = src[i]

//     }
//     return unflatten(JSON.parse(JSON.stringify(finalObj)))
// }


export function isArray(o) {
  return Object.prototype.toString.call(o) === '[object Array]';
}

export function traverseToSetUUID(data) {
  function findNullify(obj) {
    if (obj === null) {
      return true;
    } else if (typeof obj === "undefined") {
      return true;
    } else if ((Array.isArray(obj) || typeof obj === "string") && obj.length === 0) {
      return true;
    } else if (typeof obj === "object" && Object.keys(obj).length === 0) {
      return true;
    }
    return false;
  }
  function traverse(obj, key) {
    if (isArray(obj)) {
      for (let i in obj) {
        obj[i] = traverse(obj[i], key);
      }
    } else if ((typeof obj === 'object') && (obj !== null)) {
      for (let k in obj) {
        if (obj.hasOwnProperty(k)) {
          if (k == "uuid" && findNullify(obj[k])) {
            obj[k] = generateUUID();
          }
          else {
            obj[k] = traverse(obj[k], k);
          }
        }
      }
    } else {
      //intentionally left blank
    }
    return obj
  }
  let obj = JSON.parse(JSON.stringify(data));
  traverse(obj, "");
  return obj;
}

export function getOneLevelObject(mainObj) {

  function isArray(o) {
    return Object.prototype.toString.call(o) === '[object Array]';
  }

  function travel(obj, key) {
    if (isArray(obj)) {
      obj = []
    } else if ((typeof obj === 'object') && (obj !== null)) {
      for (var k in obj) {
        if (obj.hasOwnProperty(k)) {
          obj[k] = travel(obj[k], key);
        }
      }
    } else {
      // intentionally left blank
    }
    return obj
  }
  let newMainObj = JSON.parse(JSON.stringify(mainObj))
  return travel(newMainObj, '');
}

export function deepObjectExtend(destination, source) {
  let src = flatten(JSON.parse(JSON.stringify(source)));
  let dst = flatten(JSON.parse(JSON.stringify(destination)));
  let obj = {}
  for (let i in dst) {
    obj[i] = dst[i]
  }
  for (let i in src) {
    obj[i] = src[i]
  }
  return unflatten(JSON.parse(JSON.stringify(obj)))
};



export function getConfiguredFields({ siteJson }) {
  let fieldList = [];
  siteJson.states.forEach((sD, sI) => {
    if (sD.fields) {
      sD.fields.forEach((fD, fI) => {
        fieldList.push(fD.name);
      });
    }
    if (sD.fieldsGroupings) {
      sD.fieldsGroupings.forEach((fD, fI) => {
        fD.variations.forEach((fvD, fvI) => {
          fvD.commandInput.metadata.fields.forEach((tfD, tfI) => {
            fieldList.push(tfD.name);
          });
          if (fvD.commandInput.metadata.innerTable && fvD.commandInput.metadata.innerTable.fields) {
            fvD.commandInput.metadata.innerTable.fields.forEach((tIfD, tIfI) => {
              fieldList.push(tIfD.name);
            });
          }
        });
      });
    }
  });
  fieldList = _.uniq(fieldList);
  return fieldList;
}

export function setDescendantPropGeneric(obj, desc, value) {
  return _.set(obj, desc, value);
}
export function setDescendantProp(obj, desc, value) {
  let arr = desc ? desc.split(".") : [];
  while (arr.length && obj) {
    var comp = arr.shift();
    var match = new RegExp("(.+)\\[([0-9]*)\\]").exec(comp);

    // handle arrays
    if ((match !== null) && (match.length == 3)) {
      var arrayData = {
        arrName: match[1],
        arrIndex: match[2]
      };
      if (obj[arrayData.arrName] !== undefined) {
        if (typeof value !== 'undefined' && arr.length === 0) {
          obj[arrayData.arrName][arrayData.arrIndex] = value;
        }
        obj = obj[arrayData.arrName][arrayData.arrIndex];
      } else {
        obj = undefined;
      }

      continue;
    }

    // handle regular things
    if (typeof value !== 'undefined') {
      if (obj[comp] === undefined) {
        obj[comp] = {};
      }

      if (arr.length === 0) {
        obj[comp] = value;
      }
    }

    obj = obj[comp];
  }
  return obj;
}



export function unflatten(data) {
  "use strict";
  if (Object(data) !== data || Array.isArray(data))
    return data;
  var regex = /\.?([^.\[\]]+)|\[(\d+)\]/g,
    resultholder = {};
  for (var p in data) {
    var cur = resultholder,
      prop = "",
      m;
    while (m = regex.exec(p)) {
      cur = cur[prop] || (cur[prop] = (m[2] ? [] : {}));
      prop = m[2] || m[1];
    }
    cur[prop] = data[p];
  }
  return resultholder[""] || resultholder;
};

export function toValueFromTitle(title) {
  let text = title.replace(/\s+/g, ' ').split(' ');
  if (text.length == 1)
    return title.toLowerCase();
  else {
    let str = '';
    for (var i = 0; i < text.length; i++) {
      if (i == 0)
        str = str + text[i].toLowerCase();
      else
        str = str + text[i].charAt(0).toUpperCase() + text[i].substr(1).toLowerCase();
    }
    return str;
  }
};




export function segmentItemsMergeDelta({ oldSegments, newSegments }) {
  if (!oldSegments) {
    return newSegments;
  }
  let clonedNewSegments = JSON.parse(JSON.stringify(newSegments));
  let finalSegmentData = [];
  clonedNewSegments.forEach((newData) => {
    let newSegmentData = JSON.parse(JSON.stringify(newData));
    let oldSegmentData = null;
    //segmentId is priority
    oldSegmentData = oldSegments.find((oldData) =>
      (newSegmentData.segmentId && oldData.segmentId && newSegmentData.segmentId === oldData.segmentId));
    //segmentId  not there then item+db+feature is the priority
    if (!oldSegmentData) {
      oldSegmentData = oldSegments.find((oldData) =>
      (newSegmentData.itemId === oldData.itemId &&
        newSegmentData.dbName === oldData.dbName &&
        newSegmentData.feature === oldData.feature));
    }
    if (oldSegmentData) {
      newSegmentData = { ...oldSegmentData, ...newSegmentData };
    }
    finalSegmentData.push(newSegmentData);
  });
  return finalSegmentData;
}

export const hashCode = function (str) {
  var hash = 0, i, chr;
  if (str.length === 0) return hash;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

export const checkIfDataModified = function (prevData, newData, ignorePrevNull = true) {

  if (!prevData && !newData) {
    return;
  }

  if (!prevData && ignorePrevNull) {
    return false;;
  }

  if ((!prevData && newData) || (prevData && !newData)) {
    return true;
  }

  else if (!_.isEqualWith(prevData, newData, (value1, value2, key) => {
    return key === "uuid" || (!value2 && !value1) ? true : undefined;
  })) {
    //worst case prune and check
    if (!_.isEqualWith(pruneEmpty(prevData), pruneEmpty(newData), (value1, value2, key) => {
      return key === "uuid" || (!value2 && !value1) ? true : undefined;
    })) {
      return true;
    }
  }
}


  // var old = [{
  //   "status": "403",
  //   "containerVersion": "296",
  //   "baseVersion": "",
  //   "segmentCount": "2",
  //   "itemId": "85483618",
  //   "dbName": "scexag07s",
  //   "feature": "PFM",
  //   "segmentId": "9",
  //   "dumpLink": "https://fmdumps.tools.yodlee.com/dumpdispatcher/dumps?id=27749744.172.17.15.94.2018.07.30.23.27.25.587.html",
  //   "route": "AIM",
  //   "pages": [

  //   ]
  // }];

  // var newD = [{
  //   "status": "0",
  //   "containerVersion": "296",
  //   "baseVersion": "",
  //   "segmentCount": "2",
  //   "itemId": "85483618",
  //   "dbName": "scexag07s",
  //   "feature": "PFM",
  //   "segmentId": "9",
  //   "dumpLink": "https://fmdumps.tools.yodlee.com/dumpdispatcher/dumps?id=27749744.172.17.15.94.2018.07.30.23.27.25.587.html",
  //   "route": "JDAP",
  //   "pages": [
  //     {
  //       "htmlFilePath": "api/view/html/DiscoverBank_85483618/1.html",
  //       "type": "html",
  //       "stateInfoList": [
  //         {
  //           "stateName": "LOGIN",
  //           "stateId": "BANK_LOGIN_1"
  //         }
  //       ]
  //     }
  //   ]
  // }];

  // var segData = segmentItemsMergeDelta({ oldSegments: old, newSegments: newD });

