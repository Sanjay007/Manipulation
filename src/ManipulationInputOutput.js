import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Icon, Grid, Input, Button } from 'semantic-ui-react';
import * as ManipulationUtils from './manipulationsUtil';
import * as ManipulationService from './manipulationService';
//import { StateElementsResolver } from '../StateUnitTesting/StateElementsResolver';


class ManipulationInputOutput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputArray: []
    };
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    // get Value From Master Form  
    let manipulationForThisFieldData = {
      field: nextProps.manipulationForField,
      value: ""
    };

    try {
      if (nextProps.masterFormContext && nextProps.masterFormContext.formInfo
        && nextProps.masterFormContext.parentContext === "field") {
        let iframe = document.getElementById('html_page_iframe');
        let frameDoc = (iframe.contentDocument) ? iframe.contentDocument : iframe.contentWindow.document;
        let fieldResolved //StateElementsResolver.commandInputResolver({ commandInput: nextProps.masterFormContext.formInfo, mainDoc: frameDoc });
        if (fieldResolved && fieldResolved.value) {
          manipulationForThisFieldData.value = fieldResolved.value;
        }
      }
    } catch (err) { console.error(err) }

    //find dependency form manipulation
    let dependentDataArr = ManipulationUtils.getDependentManipulationData({ manipulations: nextProps.manipulations });

    // fill the data from scapedValue to dependentData
    let filledDependentData = ManipulationUtils.fillDependenDataWithScrapedValue({ dependentDataArr, gatheredDataFromPage: nextProps.gatheredDataFromPage });

    // map data from dependentValue to inputArray 
    let inputArray = JSON.parse(JSON.stringify(prevState.inputArray));

    let newInputArr = [...inputArray, manipulationForThisFieldData, ...filledDependentData];
    newInputArr = _.intersectionBy(newInputArr, filledDependentData, 'field');
    newInputArr.map((item) => {
      item.value = ManipulationUtils.normaliseWhiteSpace({ value: item.value })
    })
    return {
      inputArray: newInputArr
    }
  }

  setInput = ({ value, iInd }) => {
    let inputArray = JSON.parse(JSON.stringify(this.state.inputArray));
    inputArray[iInd].value = ManipulationUtils.normaliseWhiteSpace({ value });

    //if some inputs are new which are not part of scraped value
    let manuallScrapedValues = this.props.gatheredDataFromPage.manualData;
    let newManulaData = [];
    if (manuallScrapedValues) {
      newManulaData = [...manuallScrapedValues];
      let { field } = inputArray[iInd];
      let fieldDataInd = newManulaData.findIndex(o => o.field === field);
      if (fieldDataInd !== -1) {
        newManulaData[fieldDataInd].value = value;
      } else {
        newManulaData.push({ ...inputArray[iInd] });
      }
    } else {
      newManulaData.push({ ...inputArray[iInd] });
    }
    this.props.setScrapedFieldManually(newManulaData);

    // set that to scraped value in another key
    this.setState({ inputArray });
  }

  triggerManipulationTest = () => {
    this.props.manipulationServiceTrigger({
      inputArray: this.state.inputArray,
      manipulations: this.props.manipulations,
      manipulationForField: this.props.manipulationForField
    });

  }


  render() {
    let { inputArray } = this.state;
    let { manipulationServiceData, manipulationServiceFailure } = this.props;
    let manipResults = [];
    if (manipulationServiceData && manipulationServiceData.results && manipulationServiceData.results.length > 0) {
      manipResults = manipulationServiceData.results;
    }
    return (
      <Grid divided>
        <Grid.Column width={6}>
          Input<br />
          {inputArray.length <= 0 ? 'Inputs will be shown here' : null}
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {inputArray.map((item, iInd) => (
              <React.Fragment key={iInd}>
                <div style={{ width: '50%' }}>
                  <label style={{ fontSize: '0.7rem' }} >{item.field}</label><br />
                  <Input placeholder='Input String' fluid style={{ fontSize: '0.7rem' }}
                    value={item.value} onChange={(e, { name, value }) => this.setInput({ value, iInd })} />
                </div>
              </React.Fragment>
            ))}
          </div>
        </Grid.Column>
        <Grid.Column width={4} >
          Actions<br />
          <Button size='tiny' style={{ fontSize: '0.7rem' }} color='blue'
            onClick={this.triggerManipulationTest} basic><Icon name='play' />Test</Button>
        </Grid.Column>
        <Grid.Column width={6} >
          Output<br />
          {(manipResults.length > 0) ?
            <React.Fragment>
              {manipResults[0].fieldName ? <span>Field : {manipResults[0].fieldName}</span> : null}<br />
              {manipResults[0].manipulatedValue ? <span>Manipulated Value : {manipResults[0].manipulatedValue}</span> : null}<br />
              {manipResults[0].errorMessage ? <span style={{ color: 'red' }}>Error : {manipResults[0].errorMessage}</span> : null}<br />
            </React.Fragment> : manipulationServiceFailure ? <span style={{ color: 'red' }}>Error : {manipulationServiceFailure}</span> : 'Final Output Will be shown here'}
        </Grid.Column>
      </Grid>
    )

  }
}
export default connect((state) => {
  return {
    gatheredDataFromPage: state.app.gatheredDataFromPage,
    masterFormContext: state.app.masterFormContext,
    manipulationServiceData: state.app.manipulationServiceData,
    manipulationServiceFailure: state.app.manipulationServiceFailure
  }
}, (dispatch) => {
  return {
    manipulationServiceTrigger: (data) => dispatch(ManipulationService.triggerManipulationService(data)),
    setScrapedFieldManually: (data) => dispatch({ type: "SET_SCRAPPED_FIELD_MANUALLY", data })
  }
})(ManipulationInputOutput);



