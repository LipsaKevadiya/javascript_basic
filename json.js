// JavaScript object into a string with .stringify()
const obj = { name: "Lipsa", age: 21, city: "Surat" };
const myJSON = JSON.stringify(obj);
console.log(myJSON);
console.log(typeof myJSON);
//JSON Parsing
const jsonString = '{"name": "Lipsa", "age": 21, "city": "Surat"}';
const parsedData = JSON.parse(jsonString);

console.log(parsedData.name);
