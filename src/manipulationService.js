//import { customAxios, endpoints, getError } from '../../../actions/index';

export const triggerManipulationService = ({ inputArray, manipulations, manipulationForField }) => (dispatch, getState) => {

  // let manipReq = createManipulationRequest({ inputArray, manipulations, manipulationForField });
  // dispatch({ type: "MANIPULATION_FOR_MASTER_FORM_REQUEST" });
  // customAxios.post(endpoints.manipulationEvaluator, manipReq)
  //   .then((response) => {
  //     dispatch({ type: "MANIPULATION_FOR_MASTER_FORM_SUCCESS", response: response.data });
  //   }).catch((err) => {
  //     console.error(err);
  //     dispatch({ type: "MANIPULATION_FOR_MASTER_FORM_FAILURE", error: getError(err) });
  //   });
}


function createManipulationRequest({ inputArray, manipulations, manipulationForField }) {
  let req = {};
  let preExecutor = [];
  let executor = [];
  inputArray.forEach(element => {
    if (element.value != null && element.value !== undefined)
      preExecutor.push({ "expression": `${element.field} = @typeManipulators.toString('${element.value.replace(/'/g, "''")}')` })
  });
  executor.push({
    "helpData": "",
    "fieldName": `${manipulationForField}`,
    "postManipulations": { manipulations: manipulations }
  });
  req = { preExecutor, executor };
  console.log({ req });
  return req;
}