// Arrow Function, Template Literals----------------------

class Animal {
  constructor(name, numOfLegs) {
    this.name = name;
    this.numOfLegs = numOfLegs;
  }

  sayName = () => {
    console.log(`My name is ${this.name}`); // My name is brownie
  };
}

const Dog = new Animal("brownie", 4);

Dog.sayName();

// Array Destructuring------------------------

let firstName, lastName, fatherName;

[firstName, lastName, fatherName] = ["lipsa", "kevadiya", "roshanbhai"];

console.log(firstName); // "lipsa"
console.log(lastName); // "kevadiya"
console.log(fatherName); // "roshanbhai"

// obj Destructuring------------------------

const person = {
  name: "lipsa",
  age: 21,
  gender: "female",
};

// destructuring assignment
let { name, age, gender } = person;

console.log(name); // lipsa
console.log(age); // 21
console.log(gender); // female

// Spread operators---------------------------

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); // 6
//------------------------------------------------------
const arrValue = ["My", "name", "is", "Lipsa"];

console.log(arrValue); // [ 'My', 'name', 'is', 'Lipsa' ]
console.log(...arrValue); // My name is Lipsa

// Multiline Strings Using Template Literals----------------------

const message = `this msg is to show 
use of template literals `;
console.log(message);

// rest parameter: When the spread operator is used as a parameter-------------

myFun("one", "two", "three", "four", "five", "six");
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a); // a, one
  console.log("b", b); // b, two
  console.log("manyMoreArgs", manyMoreArgs); // manyMoreArgs, ["three", "four", "five", "six"]
}

// map()----------------------------

let arr = [2, 5, 6, 3, 8, 9];
let newArr = arr.map(function (val, index) {
  return { key: index, value: val * val };
});

console.log(newArr);
/* [
  { key: 0, value: 4 },
  { key: 1, value: 25 },
  { key: 2, value: 36 },
  { key: 3, value: 9 },
  { key: 4, value: 64 },
  { key: 5, value: 81 }
]*/

// WeakMap()------------------------------

const weakMap = new WeakMap();
console.log(weakMap); // WeakMap {}

// Creating a WeakMap
let myWeakMap = new WeakMap();

// Creating an object to use as a key
let keyObject = {};

// Adding an element to the WeakMap
myWeakMap.set(keyObject, "Hello");

// Retrieving the value using the key
let value = myWeakMap.get(keyObject);

console.log(value); // Hello

// Set---------------------------------

let set1 = new Set();

set1.add(10);
set1.add(20);
set1.add(30).add(40).add(50);

console.log(set1); // Set(5) { 10, 20, 30, 40, 50 }
console.log(set1.has(50)); // true

//----------------------------------

let mySet = new Set();

// Add elements to the Set
mySet.add("apple");
mySet.add("banana");
mySet.add("orange");

// Access elements in the Set
console.log(mySet.has("banana")); // true

// Iterate over the Set using for-of loop
console.log("Iterating over the Set:");
for (let value of mySet) {
  console.log(value);
}
// apple
// banana
// orange

// Delete an element from the Set
mySet.delete("banana");

// Check if an element still exists
console.log(mySet.has("banana")); //false

// Iterate over the Set after deletion
console.log("Iterating over the Set after deletion:");
for (let value of mySet) {
  console.log(value);
}
// apple
// orange

// WeakSet()-----------------------------------------

let myWeakSet = new WeakSet();

let obj1 = { name: "John" };
let obj2 = { name: "Jane" };

// Add objects to the WeakSet
myWeakSet.add(obj1);
myWeakSet.add(obj2);

// check if an element is in  WeakSet()
console.log(myWeakSet.has(obj1)); //true

// Remove an object from WeakSet
myWeakSet.delete(obj1);

console.log(myWeakSet.has(obj1)); //false

// Class Inheritance ---------------------------------------------------------

// Parent class
class Animall {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Child class inheriting from the parent class
class Doggo extends Animall {
  constructor(name, breed) {
    // Call the constructor of the parent class using super
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} barks loudly!`);
  }
}

// Create an instance of the child class

let myDog = new Doggo("Buddy", "Golden Retriever");
console.log(myDog); // Doggo { name: 'Buddy', breed: 'Golden Retriever' }

// Call methods from both parent and child classes

myDog.speak(); // Buddy makes a sound.
myDog.bark(); // Buddy barks loudly!

// Generator function------------------------------------------------

function* generatorFunc() {
  yield 10;
  yield 20;
  yield 30; // 'yield' is used to produce a value during each iteration.
}

const obj = generatorFunc();

// iteration through generator
for (let value of obj) {
  console.log(value); //10 20 30
}

// proxy --------------------------------------------------------

// original obj
// let student1 = {
//   age: 21,
//   name: "lipsa",
// };
// // proxy obj
// // providing custom behavior for property access
// const handler = {
//   get: function (obj, prop) {
//     return obj[prop] ? obj[prop] : "property does not exist";
//   },
// };

// const proxy = new Proxy(student1, handler); // 'handler' is used to create a Proxy object that wraps the original student1 object.
// // When an empty handler {} is passed, the proxy behaves as an original object
// console.log(proxy.name); // lipsa
// console.log(proxy.age); // 21
// console.log(proxy.class); // property does not exist

// two handler methods get() and set() ------------------------

let student = {
  age: 21,
  name: "lipsa",
};

const handler = {
  // get the object key and value
  get(obj, prop) {
    return obj[prop];
  },
};

const proxy = new Proxy(student, handler);
console.log(proxy.name); // lipsa

//--------------

let studentt = {
  name: "lipsa",
};

let setNewValue = {
  set: function (obj, prop, value) {
    obj[prop] = value;
    return;
  },
};

// setting new proxy
let personn = new Proxy(studentt, setNewValue);

// new property age is added to the student object
personn.age = 20;
console.log(personn); // Proxy {name: "lipsa", age: 20}

// without rest parameter-------------------------------------------------------------------

function exampleFunction(arg1, arg2, arg3, arg4) {
  var a = Array.prototype.slice.call(arguments, 2);
  console.log(a); // [ 'c', 'd', 'e' ]
}

exampleFunction("a", "b", "c", "d", "e");

// with rest------------------------------------------------------------------

function exampleFunction(arg1, arg2, ...restArgs) {
  console.log(restArgs); // [ 'c', 'd', 'e' ]
}

exampleFunction("a", "b", "c", "d", "e");
//----------------------------------
