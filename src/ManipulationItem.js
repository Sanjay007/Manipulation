import React, { Component } from 'react';
import { connect } from 'react-redux';
import ManipulationGroup from './ManipulationGroup';
import { titleForFields } from './utility';
import _ from 'lodash';
import {
  Grid, Label, Button, Input, Form, Dropdown, Header
} from 'semantic-ui-react';
import { isUUIDPartOfData } from './utility';
import * as ManipulationUtils from './manipulationsUtil';
import * as templateAdder from './templateAdder';

class ManipulationItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditable: false,
      oldValue: '',
      visible: true,
      errorFlag: false,
    };
  }

  componentDidMount() {
    let { errorUUID, errorDumpResponse } = this.props;
    if (errorUUID !== undefined && errorUUID !== null
      && errorUUID.length > 0 && errorDumpResponse !== null) {
      if (isUUIDPartOfData(errorUUID, this.props.item)) {
        this.setState({ errorFlag: true });
      } else {
        this.setState({ errorFlag: false });
      }
    }

  }

  onLabelClick = () => {
    this.setState({ isEditable: true });
  }

  onItemBlur = ({ path }) => {
    this.props.updateVariable({ name: path, value: this.state.oldValue });
    this.setState({ isEditable: false });
  }

  onItemFocus = (value) => {
    this.setState({ isEditable: true, oldValue: value });
  }

  toggle = () => {
    this.setState({ visible: !this.state.visible });
  }

  onEditableItemChange = (e, { name, value }) => {
    this.setState({ oldValue: value });
  }

  getAllVariableInArray = (manip, tempVarArr) => {
    manip.forEach((item) => {
      tempVarArr.push(item.variable);
      if (item.hasOwnProperty('nestedStatements') && item.nestedStatements.length > 0) {
        this.getAllVariableInArray(item.nestedStatements, tempVarArr);
      }
    });
    return tempVarArr;
  }



  render() {
    const { item, handleItemDel, handleItemAdd, onChangeMethodName,
      updateVariable, onChangeArguments, handleAddition, setterPath,
      manipulationServiceData, manipulationsMasterSet, type, methodOptions, ifOperators, argumentOptions } = this.props;
    const { visible, errorFlag } = this.state;

    let outputMapingValue = ManipulationUtils.findOutputForPath({ manipulationServiceData, uuid: item.uuid });

    const getAllArguments = (value, itemData, aD) => {
      let argumentOpt = [];

      //add existing value to dropdown
      argumentOpt.push({ key: value, text: aD.type === 'CUSTOM' ? value : titleForFields(value), value: value, type: aD.type });

      //finding temp/variable names from existing manipulations
      try {
        let ItemVarArr = [];
        this.getAllVariableInArray(this.props.manipulationsMasterSet, ItemVarArr);
        ItemVarArr.forEach((ele) => {
          argumentOpt.push({ key: ele, text: titleForFields(ele), value: ele, type: 'VARIABLE' });
        })
      } catch (e) {
        console.error(e);
      }
      if (itemData.methodName === 'setValue' || itemData.methodName === 'assign') {
        let taxDocDownloadConstants = JSON.parse(JSON.stringify(templateAdder.taxDocDownloadConstants));
        let fname = 'NA';
        //take this field from 2nd argument for assign
        if (itemData.methodName === 'assign') {
          if (itemData.arguments && itemData.arguments[0] && itemData.arguments[0].value) {
            fname = itemData.arguments[0].value;
          }
        }
        //take this field from helpercontext passed to manipulation container
        if (itemData.methodName === 'setValue') {
          if (this.props.manipulationForField) {
            fname = this.props.manipulationForField;
          }
        }
        if (taxDocDownloadConstants.hasOwnProperty(fname)) {
          let opts = taxDocDownloadConstants[fname];
          opts.forEach((e) => {
            argumentOpt.push({ key: e, text: titleForFields(e), value: e, type: 'CUSTOM' });
          });
        }
      }

      if (this.props.hasOwnProperty('context') && this.props.context === 'container' && itemData.methodName === 'assign') {
        if (aD.name === 'lhs') {
          argumentOpt = [{ key: 'container', text: titleForFields('container'), value: 'container', type: 'FIELD' }]
        } else if (aD.name === 'rhs') {
          let containerDetails = this.props.yadSearchResponse[this.props.selectedSiteIndex].containerDetails;
          containerDetails.forEach((cd) => {
            Object.keys(this.props.modelConfig).forEach((ct) => {
              if (cd.containerId.containerType.toUpperCase() === ct.toUpperCase()
                && ct.toUpperCase() !== "BASE") {
                argumentOpt.push({
                  key: this.props.modelConfig[ct].tag,
                  value: this.props.modelConfig[ct].tag,
                  text: ct,
                  type: 'CUSTOM'
                });
              }
            });
          });
        }
      }

      if (this.props.hasOwnProperty('manipulationForField') && this.props.manipulationForField === 'containerType') {

        if (aD.name === 'lhs') {
          argumentOpt.push({ key: 'containerType', text: titleForFields('containerType'), value: 'containerType', type: 'FIELD' });
        } else if (aD.name === 'rhs') {
          let containerDetails = this.props.yadSearchResponse[this.props.selectedSiteIndex].containerDetails;
          containerDetails.forEach((cd) => {
            Object.keys(this.props.modelConfig).forEach((ct) => {
              if (cd.containerId.containerType.toUpperCase() === ct.toUpperCase()
                && ct.toUpperCase() !== "BASE") {
                argumentOpt.push({
                  key: this.props.modelConfig[ct].tag,
                  value: this.props.modelConfig[ct].tag,
                  text: ct,
                  type: 'CUSTOM'
                });
              }
            });
          });
        }
      }

      argumentOpt = _.uniqBy(argumentOpt, 'value');

      let mappedOptions = argumentOpt.map(argumentOpt => {
        let data = {
          key: argumentOpt.key, value: argumentOpt.value, text: argumentOpt.text, type: argumentOpt.type, content: <Header size='tiny' content={argumentOpt.text}
            subheader={argumentOpt.value} style={{ overflowWrap: 'break-word' }} />
        }
        return data;
      });

      return _.uniqBy([...mappedOptions, ...argumentOptions], 'value');
    }

    return (
      <React.Fragment>
        <div className={(errorFlag) ? 'redBorder' : ''}>
          <Grid>
            <Grid.Column width={2} style={{ paddingRight: '1px' }} >
              <label style={{ fontSize: '0.7rem' }} >Choose</label>
              <Dropdown fluid search selection selectOnBlur={false}
                className="manipulation-method-dropdown" name=''
                style={{ fontSize: '.7em', margin: '0px' }} placeholder='Choose'
                value={item.methodName}
                options={methodOptions}
                onChange={(e, { name, value }) => {
                  if (e.type == 'click' || e.keyCode == 13)
                    onChangeMethodName({ name: setterPath, value, activeGroup: type });
                }} />
            </Grid.Column>

            <Grid.Column width={7}>
              <Grid>
                {(item.hasOwnProperty('arguments')) ? <React.Fragment>
                  {item.arguments.map((aD, aI) => {
                    return <Grid.Column width={5} key={aI} style={{ paddingLeft: '1px', paddingRight: '1px' }} >
                      <label style={{ fontSize: '0.7rem' }} >{aD.name != undefined ? aD.name : 'op' + aI}</label>
                      <Dropdown style={{ fontSize: '0.7rem', paddingLeft: '1px', paddingRight: '1px' }}
                        search selection options={(item.methodName === 'if' && aI === 1) ?
                          ifOperators : getAllArguments(aD.value, item, aD)}
                        fluid placeholder='Choose' text={aD.type === 'CUSTOM' ? aD.value : titleForFields(aD.value)} value={aD.value} allowAdditions
                        name={`${setterPath}.arguments[${aI}]`}
                        onAddItem={(e, { name, value, options }) => {
                          handleAddition({ name, value, options, activeGroup: type })
                        }}
                        onChange={(e, { name, value, options }) => {
                          if (e.type == 'click' || e.keyCode == 13) {
                            onChangeArguments({ name, value, options, activeGroup: type })
                            e.preventDefault();
                            e.stopPropagation();
                          }
                        }}
                      />
                    </Grid.Column>
                  })}
                </React.Fragment> : null}
              </Grid>
            </Grid.Column>

            <Grid.Column width={2} style={{ paddingLeft: '0', paddingRight: '0' }}>
              <Form style={{ fontSize: '0.7rem' }}>
                <label>Variable</label><br />
                {this.state.isEditable ? <Input onBlur={() => { this.onItemBlur({ path: `${setterPath}.variable` }) }}
                  onFocus={(e) => { this.onItemFocus(item.variable) }} focus
                  onChange={this.onEditableItemChange} /> :
                  <Label basic onClick={this.onLabelClick} >{item.variable}</Label>}
              </Form>
            </Grid.Column>

            <Grid.Column width={2} style={{ paddingLeft: '0', paddingRight: '0' }}>
              <label style={{ fontSize: '0.7rem' }}>Action</label><br />
              <Button icon='plus' color='blue' size='mini' basic onClick={() => { handleItemAdd({ path: setterPath, activeGroup: type }) }} />
              <Button icon='trash' onClick={() => { handleItemDel({ path: setterPath, activeGroup: type }) }} basic color='blue' size='mini' />
              {item.methodName === 'if' ?
                <Button icon={visible === true ? 'chevron up' : 'chevron down'} basic color='blue' size='mini'
                  onClick={this.toggle} /> : null}
              {/* <Button icon='play' color='blue' size='mini' basic onClick={() => { }} /> */}
            </Grid.Column>
            <Grid.Column width={3} style={{ paddingLeft: '0' }}>
              <label style={{ fontSize: '0.7rem' }}>Output</label><br />
              <Label basic>{outputMapingValue}</Label>
            </Grid.Column>
          </Grid>
        </div>

        <div>
          {(item.hasOwnProperty('nestedStatements') && item.nestedStatements.length > 0) ?
            <React.Fragment>
              {visible === true ? <React.Fragment>
                <ManipulationGroup
                  methodOptions={methodOptions}
                  ifOperators={ifOperators}
                  argumentOptions={argumentOptions}
                  handleItemAdd={handleItemAdd}
                  handleAddition={handleAddition}
                  onChangeArguments={onChangeArguments}
                  onChangeMethodName={onChangeMethodName}
                  setterPath={`${setterPath}.nestedStatements`}
                  manipulations={item.nestedStatements}
                  manipulationsMasterSet={manipulationsMasterSet}
                  item={item}
                  type={type}
                  updateVariable={updateVariable}
                  handleItemDel={handleItemDel}
                  context={this.props.hasOwnProperty('context') ? this.props.context : 'NA'}
                />
              </React.Fragment> : ''} </React.Fragment> : null}
        </div>
      </React.Fragment>
    )

  }
}

const mapStateToProps = (state) => {
  return {

    manipulationMethods: state.app.manipulationMethods,
    fieldList: state.app.fieldList,
    masterFormContext: state.app.masterFormContext,
    communicationContext: state.app.communicationContext,
    toolSiteJson: state.app.toolSiteJson,
    allStates: state.app.toolSiteJson.states,
    toolstateIndex: state.app.toolStateIndex,
    modelConfig: state.app.modelConfig,
    yadSearchResponse: state.app.yadSearchResponse,
    selectedSiteIndex: state.app.selectedSiteIndex,

    errorPath: state.app.errorPath,
    errorUUID: state.app.errorUUID,
    errorDumpResponse: state.app.errorDumpResponse,
    manipulationServiceData: state.app.manipulationServiceData

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ManipulationItem);