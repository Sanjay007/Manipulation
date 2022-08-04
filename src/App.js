import React from 'react';
import _ from 'lodash';
import ManipulationContainer from './manipulationContainer';
import { setDescendantPropGeneric } from './utility';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDataManipOpen: false,
            postManipulations: {
                "manipulations": [
                  {
                    "expression": "@stringManipulators.trim(interestRate)",
                    "methodClass": "StringManipulators",
                    "variable": "var1",
                    "methodName": "trim",
                    "arguments": [
                      {
                        "dataType": "String",
                        "name": "input",
                        "type": "FIELD",
                        "uuid": "FiservMortgage_14619_b31ff981-5fd4-4caa-b7b7-4011d079cc7b",
                        "value": "interestRate"
                      }
                    ],
                    "uuid": "FiservMortgage_14619_ad0dd5c3-fdf0-405b-915e-18d493556205"
                  },
                  {
                    "expression": "@stringManipulators.indexOf(@typeManipulators.toString(var1),@typeManipulators.toString('%'),0)",
                    "methodClass": "StringManipulators",
                    "variable": "var2",
                    "methodName": "indexOf",
                    "arguments": [
                      {
                        "dataType": "String",
                        "name": "input",
                        "type": "VARIABLE",
                        "uuid": "FiservMortgage_14619_6b6d7d53-63d3-47e1-8eb9-e5076017d081",
                        "value": "var1"
                      },
                      {
                        "dataType": "String",
                        "name": "str",
                        "type": "CUSTOM",
                        "uuid": "FiservMortgage_14619_979fdb7e-dbbd-4508-a934-099665fa6345",
                        "value": "%"
                      },
                      {
                        "dataType": "int",
                        "name": "fromIndex",
                        "type": "String",
                        "uuid": "FiservMortgage_14619_a5f44847-72fe-4cbf-8abd-d7207fc34ec5",
                        "value": "0"
                      }
                    ],
                    "uuid": "FiservMortgage_14619_f4590d62-5316-4bfc-8246-81bab6c11d08"
                  },
                  {
                    "expression": "@stringManipulators.substring(@typeManipulators.toString(var1),@typeManipulators.toInteger(0),@typeManipulators.toInteger(var2))",
                    "methodClass": "StringManipulators",
                    "variable": "var3",
                    "methodName": "substring",
                    "arguments": [
                      {
                        "dataType": "String",
                        "name": "input",
                        "type": "VARIABLE",
                        "uuid": "FiservMortgage_14619_7d50a05e-871c-43e3-bb88-9a795289ff27",
                        "value": "var1"
                      },
                      {
                        "dataType": "int",
                        "name": "beginIndex",
                        "type": "CUSTOM",
                        "uuid": "FiservMortgage_14619_429cf46a-b642-4eab-923a-e9d7be2bb37a",
                        "value": "0"
                      },
                      {
                        "dataType": "int",
                        "name": "endIndex",
                        "type": "VARIABLE",
                        "uuid": "FiservMortgage_14619_722469b3-56cf-40bc-9f6c-2ad691260d88",
                        "value": "var2"
                      }
                    ],
                    "uuid": "FiservMortgage_14619_633b3a05-8713-4eac-8a56-8c8ff0519250"
                  },
                  {
                    "expression": "@stringManipulators.trim(@typeManipulators.toString(var3))",
                    "methodClass": "StringManipulators",
                    "variable": "var4",
                    "methodName": "trim",
                    "arguments": [
                      {
                        "dataType": "String",
                        "name": "input",
                        "type": "VARIABLE",
                        "uuid": "FiservMortgage_14619_61aece92-6c6c-480d-ac41-a2e2457dfb7e",
                        "value": "var3"
                      }
                    ],
                    "uuid": "FiservMortgage_14619_eaa09323-8b80-4b64-a77d-b8ad67fee171"
                  },
                  {
                    "expression": "interestRate=var4",
                    "methodClass": "ConditionalOpertaion",
                    "methodName": "assign",
                    "variable": "var5",
                    "arguments": [
                      {
                        "dataType": "String",
                        "name": "lhs",
                        "type": "FIELD",
                        "value": "interestRate"
                      },
                      {
                        "dataType": "String",
                        "name": "rhs",
                        "value": "var4"
                      }
                    ],
                    "type": "",
                    "uuid": "FiservMortgage_14619_43135877-F6CE-418F-AA4A-B4257BA4DA81"
                  }
                ]
              }
        }
    }
    onAdd = ({ name, value }) => {
       // let fD = JSON.parse(JSON.stringify(this.state.postManipulations));
        //fD = setDescendantPropGeneric(fD, 'commandInput.' + name, value);
        this.setState({ postManipulations: value });
      }
    onChangeKeyValue = ({ name, value }) => {
        let fD = JSON.parse(JSON.stringify(this.state.fieldVariation));
        fD.commandInput = _.set(fD.commandInput, name, value);
        this.setState({ fieldVariation: fD });
    }
      manipulationDataPopupClose = () => {
        this.setState({ isDataManipOpen: false })
      }
      manipulationDataPopupOpen = () => {
        this.setState({ isPathManipOpen: false, isDataManipOpen: true })
      }
    render(){
        let fieldName="accountName";
      return(
            <div>
            <ManipulationContainer
                  isDataManipOpen={this.state.isDataManipOpen}
                  manipulationDataPopupClose={this.manipulationDataPopupClose}
                  manipulationDataPopupOpen={this.manipulationDataPopupOpen}
                  helperContext={{ fieldName: fieldName }}
                  trigger={<div content='Derived Data' className='secondary-button-lg' style={{ maxWidth: 'max-content' }}>Click on me for Manipulation</div>}
                  name="postManipulations"
                  postManipulations={this.state.postManipulations}
                  onChangePostManipulation={this.onAdd} />
            </div>
      )
    }
}

export default App;