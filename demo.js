//filter
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

//map
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const userNames = users.map((user) => user.name);
console.log(userNames);

//obj

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john@example.com",
};
console.log(person.firstName);
console.log(person["lastName"]);
console.log(person);
person.age = 31;
person["location"] = "New York";
console.log(person);
//person.prototype.nationality = "indian";
//console.log(person);

//calc; fun as property of obj
const calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract(x, y) {
    return x - y;
  },
};

console.log(calculator.add(5, 3));
console.log(calculator.subtract(8, 3));

//for of,for in
let iterable = [10, 20, 30];

for (let index in iterable) {
  console.log(index); // Outputs keys
}

for (let value of iterable) {
  console.log(value); // Outputs values
}

//for of
let language = "JavaScript";

let text = "";
for (let x of language) {
  text += x + "\n";
}
console.log(text);

//set
const letters = new Set(["a", "b", "c"]);
console.log(letters);
console.log(letters.size);

hello = () => "Hello Lipsa!";
console.log(hello());

//closure gives you access to an outer function's scope from an inner function

function init() {
  var name = "Mozilla"; // local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

//Creating JS objects,Accessing and modifying properties,Methods and prototypes, Creating and using regular expressions methods like search,replace,exec,test, Error Handling:Try, catch, finally, Closures and Scopes:Understanding scope,Creating and using closures, DOM Manipulation:Selecting elements,Modifying HTML and CSS, JSON:Parsing and stringifying
