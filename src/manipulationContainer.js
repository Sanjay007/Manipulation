import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as templateAdder from './templateAdder';
import ManipulationGroup from './ManipulationGroup';
import _ from 'lodash';
import { Segment, Header, Modal } from 'semantic-ui-react';
import * as ManipulationUtils from './manipulationsUtil';
import ManipulationInputOutput from './ManipulationInputOutput';
import { traverseToSetUUID } from './utility';
import { titleForFields} from './utility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import ManipulationIcon from './assets/logo1';



class ManipulationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorComponent: false,
      ifOperators: [],
      methodOptions: [],
      argumentOptions: [],
      isOpen: false,
      isLocal: false,
    };
  }

  getIfOperatorOptions = () => {
    let ifOption = JSON.parse(JSON.stringify(ManipulationUtils.ifOptions));
    let ifOperators = [];
    ifOption.forEach((fD, fI) => {
      ifOperators.push({ key: fI, text: fD, value: fD });
    })
    this.setState({ ifOperators: _.uniqBy(ifOperators, 'value') });
  }

  generateMethodOption = () => {
    let { manipulationMethods } = this.props;
    let manipulationMethodOption = [];
    manipulationMethods.forEach((mdata, mind) => {
      manipulationMethodOption.push({
        key: mdata.name + '-' + (mdata.arguments ? mdata.arguments.length : 0) + '-' + mind, value: mdata.name, text: mdata.name,
        content: <Header size='tiny' content={mdata.name}
          subheader={ManipulationUtils.getFunctionNames(mdata.className)} />
      });
    });
    this.setState({ methodOptions: manipulationMethodOption });
  }

  getArgumentOptions = () => {

    if (this.props.argumentOpt) {
      this.setState({ argumentOptions: this.props.argumentOpt });
      return;
    }

    let argumentOpt = [];

    //pushing current field from helperContext
    let { helperContext } = this.props;
    if (helperContext?.fieldName) {
      argumentOpt.push({ key: helperContext.fieldName, text: titleForFields(helperContext.fieldName), value: helperContext.fieldName, type: 'FIELD' });
    }

    //Providing SysDate as an option in dropdown
    argumentOpt.push({ key: "SysDate", text: titleForFields("SysDate"), value: "SysDate", type: 'FIELD' });

    //we need to show start date and end date i.e. request params
    argumentOpt.push({ key: 'startDate', text: titleForFields('startDate'), value: 'startDate', type: 'REQUEST' });
    argumentOpt.push({ key: 'endDate', text: titleForFields('endDate'), value: 'endDate', type: 'REQUEST' });

    //making unique with value 
    argumentOpt = _.uniqBy(argumentOpt, 'value');

    let mappedOptions = argumentOpt.map(argumentOpt => {
      let data = {
        key: argumentOpt.key, value: argumentOpt.value, text: argumentOpt.text, type: argumentOpt.type, content: <Header size='tiny' content={argumentOpt.text}
          subheader={argumentOpt.value} style={{ overflowWrap: 'break-word' }} />
      }
      return data;
    });
    this.setState({ argumentOptions: mappedOptions });
  }


  updateVariable = ({ name, value, activeGroup }) => {
    let postManipulations = {};
    postManipulations = JSON.parse(JSON.stringify(this.props.postManipulations));
    postManipulations = _.set(postManipulations, name, value);
    let valueWithUUID = traverseToSetUUID(postManipulations);
    this.setFinalManipulation({ value: valueWithUUID, activeGroup });
  };

  onChangeMethodName = ({ name, value, activeGroup }) => {
    let postManipulations = {};
      postManipulations = JSON.parse(JSON.stringify(this.props.postManipulations));
    let manipulionObject = JSON.parse(JSON.stringify(_.get(postManipulations, name)));
    //Updating Variable Name On Change Of any Method
    //increamenting index of temp getMaxCountValue is used to ensure temp names does not match
    if (manipulionObject.variable === "") {
      manipulionObject.variable = "Temp" + (ManipulationUtils.getMaxCountValue(postManipulations.manipulations) + 1).toString();
    }
    manipulionObject.methodName = value;

    //Verify the method Name is If then we need to Add nestedStatements array 
    //else we have to remove the nestedStatements Array
    if (value === 'if') {
      manipulionObject.type = "control";
      if (manipulionObject.nestedStatements.length == 0)
        manipulionObject.nestedStatements.push(JSON.parse(JSON.stringify(templateAdder.manipulationElement)));
    }
    else if (value === 'swap') {
      manipulionObject.type = "swap";
    }
    else {
      manipulionObject.type = "";
      manipulionObject.nestedStatements = [];
    }
    // Setting Arguments In Object So that It can be Rendered as Arguments
    this.props.manipulationMethods.forEach((element, index) => {
      if (element.name === value) {
        let manipArguments = []
        if (element.arguments) {
          element.arguments.forEach((argElement, argIndex) => {
            let argumentTemplate = JSON.parse(JSON.stringify(templateAdder.manipulationElementArgument))
            argumentTemplate.name = argElement.name;
            argumentTemplate.dataType = argElement.dataType;
            manipArguments.push(argumentTemplate);
          });
        }
        manipulionObject.methodClass = element.className;
        manipulionObject.arguments = manipArguments;
      }
    })
    //end doing stuffs over manipulionObject
    postManipulations = _.set(postManipulations, name, manipulionObject);
    let valueWithUUID = traverseToSetUUID(postManipulations);
    this.setFinalManipulation({ value: valueWithUUID, activeGroup });
  }

  handleItemDel = ({ path, activeGroup }) => {
    let postManipulations = {};
      postManipulations = JSON.parse(JSON.stringify(this.props.postManipulations));
    if (path.trim().endsWith(']')) { //array  // ^(.*)\[(\d)\]$ for array 
      let reg = /^(.*)\[(\d+)\]$/.exec(path);
      let parentPath = reg[1], ind = Number.parseInt(reg[2]);
      let parentData = _.get(postManipulations, parentPath);
      parentData.splice(ind, 1);
      if (parentData.length === 0) { //dont delete just reset
        parentData.push(JSON.parse(JSON.stringify(templateAdder.manipulationElement)));
      } else if (parentData.length === 1) { //reset auto
        if (parentData[0].type === "auto") {
          parentData[0] = JSON.parse(JSON.stringify(templateAdder.manipulationElement));
        }
      }
      postManipulations = _.set(postManipulations, parentPath, parentData);
      this.setFinalManipulation({ value: postManipulations, activeGroup });
    } else {
      alert('deleting issue : please contact developer');
    }
  }

  handleItemAdd = ({ path, activeGroup }) => {
    let postManipulations = {};
      postManipulations = JSON.parse(JSON.stringify(this.props.postManipulations));
    if (path.trim().endsWith(']')) { //array  // ^(.*)\[(\d)\]$ for array 
      let reg = /^(.*)\[(\d+)\]$/.exec(path);
      let parentPath = reg[1], ind = Number.parseInt(reg[2]);
      let parentData = _.get(postManipulations, parentPath);
      parentData.splice(ind + 1, 0, (JSON.parse(JSON.stringify(templateAdder.manipulationElement))));
      postManipulations = _.set(postManipulations, parentPath, parentData);
      let valueWithUUID = traverseToSetUUID(postManipulations);
      this.setFinalManipulation({ value: valueWithUUID, activeGroup });
    }
  }


  onChangeArguments = ({ name, value, options, activeGroup }) => {
    this.handleAddition({ name, value, options, activeGroup });
  }

  handleAddition = ({ name, value, options, activeGroup }) => {
    let postManipulations = {};
      postManipulations = JSON.parse(JSON.stringify(this.props.postManipulations));
    let manipulionObject = JSON.parse(JSON.stringify(_.get(postManipulations, name)));
    manipulionObject.value = value;
    manipulionObject.type = ManipulationUtils.populateArgType({ inputValue: value, options });
    postManipulations = _.set(postManipulations, name, manipulionObject);
    let valueWithUUID = traverseToSetUUID(postManipulations);
    this.setFinalManipulation({ value: valueWithUUID, activeGroup });
  }


  setFinalManipulation = ({ value, activeGroup }) => {
    let newValue = JSON.parse(JSON.stringify(value));
    newValue = ManipulationUtils.generateSPEL(newValue);
    newValue = ManipulationUtils.processForAssignFunction({
      postManipulations: newValue,
      helperContext: this.props.helperContext
    });

    if (activeGroup == "autoManipulation") {
      this.props.onChangeAutoManipulation({
        data: newValue
      })
    }
    else {
      this.props.onChangePostManipulation({
        name: this.props.name, value: newValue,
      });
    }
  }

  componentDidMount() {
    this.props.resetManipulationServiceData();
    this.getIfOperatorOptions();
    this.generateMethodOption();
    this.getArgumentOptions();

    let { manipulationDataPopupOpen, manipulationDataPopupClose } = this.props;

    if (!manipulationDataPopupOpen || !manipulationDataPopupClose) {
      this.setState({ isLocal: true })
    }
  }

  open = () => {
    let { isLocal } = this.state;
    let { manipulationDataPopupOpen } = this.props;

    if (isLocal) {
      this.setState({ isOpen: true })
    } else {
      manipulationDataPopupOpen();
    }
  }

  close = () => {
    let { isLocal } = this.state;
    let { manipulationDataPopupClose } = this.props;

    if (isLocal) {
      this.setState({ isOpen: false })
    } else {
      manipulationDataPopupClose();
    }
  }

  componentDidCatch(error, info) {
    console.log("Something bad happened in online auto manipulattion", error, info);
    this.setState({ errorComponent: true });
  }


  render() {
    const { postManipulations, helperContext, name, onChangePostManipulation, isDataManipOpen, trigger, renderContentOnly, disabled, autoHealSuggestionsSteps } = this.props;

    /**
    * Some places the functionality is controlled from parent, other places, controlling it locally
    */
    let { isLocal, isOpen } = this.state;
    let isManipPresent = postManipulations?.manipulations?.[0]?.methodName;

    let fieldUUID = "";
    if (helperContext && helperContext.variationData && helperContext.variationData.uuid) {
      fieldUUID = helperContext.variationData.uuid;
    }

    let open = isLocal ? isOpen : isDataManipOpen;
    let content = (open || renderContentOnly) && <>

      <Segment>
        <ManipulationInputOutput
          manipulations={postManipulations.manipulations}
          manipulationForField={helperContext ? helperContext.fieldName ? helperContext.fieldName : 'temp' : 'temp'}
        />
      </Segment>
      <ManipulationGroup
        methodOptions={this.state.methodOptions}
        ifOperators={this.state.ifOperators}
        argumentOptions={this.state.argumentOptions}
        handleItemAdd={this.handleItemAdd}
        onChangeArguments={this.onChangeArguments}
        handleAddition={this.handleAddition}
        onChangeMethodName={this.onChangeMethodName}
        setterPath={`manipulations`}
        manipulations={postManipulations.manipulations}
        manipulationsMasterSet={postManipulations.manipulations}
        updateVariable={this.updateVariable}
        handleItemDel={this.handleItemDel}
        context={this.props.hasOwnProperty('context') ? this.props.context : 'NA'}
        manipulationForField={helperContext ? helperContext.fieldName ? helperContext.fieldName : 'temp' : 'temp'}
      />
    </>


    return (
      renderContentOnly ? content : <Modal
        open={open}
        trigger={trigger ? <span className={`${disabled ? 'disabled-events' : ''}`} onClick={this.open}>{trigger}</span> :
          <div onClick={this.open} className={`cursor-pointer black-transparent-55 ${disabled ? 'disabled-events' : ''}`}>
            <ManipulationIcon color={disabled ? '#c1c1c1' : !isManipPresent ? '#737373': autoHealSuggestionsSteps?'#108043' : '#0074bd'} />
          </div>}
      >
        <Modal.Content>
          {helperContext && helperContext.fieldName ?
            <div className='flex-row align-item-center justify-content-space-between'>
              <div className='font-size-md font-weight-600 line-height-17'>{titleForFields(helperContext.fieldName)}</div>
              <FontAwesomeIcon onClick={this.close} icon={faTimes} className='font-size-lg black-transparent-55 cursor-pointer' />
            </div>
            : <div align='right'>
              <FontAwesomeIcon onClick={this.close} icon={faTimes} className='font-size-lg black-transparent-55 cursor-pointer' />
            </div>
          }
          {content}
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    manipulationMethods: state.app.manipulationMethods,
    fieldList: state.app.fieldList,
    toolSiteJson: state.app.toolSiteJson,
    autoHealSuggestionsSteps: state.app.autoHealSuggestionsSteps,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetManipulationServiceData: () => dispatch({ type: "MANIPULATION_FOR_MASTER_FORM_INIT" }),
    onChangeAutoManipulation: ({ data }) => dispatch({ type: "UPDATE_AUTO_MANIPULATION_RESULT", data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManipulationContainer);



