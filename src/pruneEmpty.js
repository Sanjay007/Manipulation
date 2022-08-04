import _ from 'lodash';
import { generateUUID } from './uuidGenerator';

export function pruneEmpty(obj) {
  // Do not modify the original object, create a clone instead
  let newObj = JSON.parse(JSON.stringify(obj));
  let purgedObj = traverseForUUIDSanatize(newObj);

  return purgedObj;
}


function traverseForUUIDSanatize(masterObj) {

  function findNullify(obj) {
    if (obj === null) {
      return true;
    }
    if (typeof obj === "undefined") {
      return true;
    }
    if ((Array.isArray(obj) || typeof obj === "string") && obj.length === 0) {
      return true;
    }
    if (typeof obj === "object" && Object.keys(obj).length === 0) {
      return true;
    }
    return false;
  }

  let cloneData = JSON.parse(JSON.stringify(masterObj));

  function processTravel(pObj) {
    let againDoingProcessing = false;

    function travel(obj, key) {
      if (Array.isArray(obj)) {
        for (let i in obj) {
          obj[i] = travel(obj[i], key);
        }
      } else if ((typeof obj === 'object') && (obj !== null)) {

        if (Object.keys(obj).length === 1 && Object.keys(obj)[0] === "uuid") {
          againDoingProcessing = true;
          delete obj["uuid"];
        }

        for (let k in obj) {
          if (obj.hasOwnProperty(k)) {
            if (k === "uuid" && findNullify(obj[k])) {
              obj[k] = generateUUID();
            }
            if (k === "dummyValues") {
              obj[k] = "";
            }
            if (findNullify(obj[k])) {
              delete obj[k];
              againDoingProcessing = true;
            } else {
              obj[k] = travel(obj[k], k);
            }
          }
        }
      }
      return obj
    }

    function actuallPruneEmpty(obj) {
      return function prune(current) {
        _.forOwn(current, function (value, key) {
          if (_.isUndefined(value) || _.isNull(value) || _.isNaN(value) ||
            (_.isString(value) && _.isEmpty(value)) ||
            (_.isObject(value) && _.isEmpty(prune(value)))) {
            againDoingProcessing = true;
            delete current[key];
          }
        });
        // remove any leftover undefined values from the delete 
        // operation on an array
        if (_.isArray(current)) _.pull(current, undefined);

        return current;

      }(_.cloneDeep(obj));  // Do not modify the original object, create a clone instead
    }

    pObj = actuallPruneEmpty(travel(pObj, ""));
    if (againDoingProcessing) {
      pObj = processTravel(pObj);
    }
    return pObj;
  }


  cloneData = processTravel(cloneData);
  return cloneData
}


