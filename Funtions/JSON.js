const Json = require("./TestData");
let data = Json.data();
const searchJSON = (JSON, key, query) => {
  if (key in JSON) {
    JSON.filter(obj => obj[key].toLowerCase() === query);
  }
};

console.log("data", searchJSON(data, "name", "ted"));
