const Json = require("./TestData");
let data = Json.data();

// Search into JSON using KEY, JSON,query
const filterJSON = params => {
  const { JSON, key, query, list = true } = params;
  console.log(list);
  if (list) return JSON.filter(obj => obj[key] === query);
};

// Search into JSON using KEY, JSON,query
const searchJSON = params => {
  const { JSON, key, query } = params;
  return JSON.filter(obj => obj[key] === query);
};

console.log("data", filterJSON({ JSON: data, key: "name", query: "Ted" }));
