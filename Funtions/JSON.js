/**
 * Operations on JSON
 * @author : Sarvesh 
 */

const Json = require("./TestData");
let data = Json.data();

/**
 * Returns the Array of json 
 * @param {object} {JSON,key,query,list} Params of object.
 * @return {Array} filter out from JSON via KEY.
 */
const filterJSON = params => {
  const { JSON, key, query, list = true } = params;
  console.log(list);
  if (list) return JSON.filter(obj => obj[key] === query);
};

/**
 * Returns the Array of json 
 * @param {object} {JSON,key,query} Params of object.
 * @return {Array} search out from JSON via KEY.
 */
const searchJSON = params => {
  const { JSON, key, query } = params;
  return JSON.filter(obj => obj[key] === query);
};

/**
 * Returns the Array of json 
 * @param {object} {JSON,key,} The number to raise.
 * @return {Array} sort out from JSON via KEY.
 */
const sortJSON = params =>{
  const {JSON , key} = params;
  JSON.sort((a,b) => {
    let a_val = typeof a[key] != 'number' ? a[key].toUpperCase() : a[key]
    let b_val = typeof b[key] != 'number' ? b[key].toUpperCase() : b[key]
    return a_val < b_val ? -1 : a_val > b_val ? 1 : 0 
  })
  return JSON
}
// For filter the data 
console.log("data", filterJSON({ JSON: data, key: "name", query: "Ted" }));
// For sort the data
console.log("data", sortJSON({ JSON: data, key: "gender"}));
