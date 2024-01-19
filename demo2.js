//Destructuring allows you to extract only the necessary data easily and in more readable way.
// Without obj destructuring
const user = { firstName: "lipsa", lastName: "kevadiya" };
const first = user.firstName;
const last = user.lastName;
console.log(user);
//console.log(first, last);

// With obj destructuring
let user1 = { firstName: "lipsa", lastName: "kevadiya" };
let { firstName: firstt, lastName: lastt } = user1;
console.log(firstt, lastt);

/* Without array destructuring
let a = 5,b = 10;
let temp = a;
a = b;
b = temp;
console.log(a, b);*/

// With array destructuring in swapping
let a = 5,
  b = 10;
[a, b] = [b, a];
console.log(a, b);

//modules
//In a large web application, you can have separate modules for handling user authentication, data fetching, UI components, etc.
//Named Exports
/*export const name = "lipsa";
export const age = 21;
//Default Exports
const message = () => {
  const name = "lipsa";
  const age = 21;
  return name + " is " + age + "years old.";
};

export default message;
//Named Import
import { name, age } from "./person.js";
//Default Import
import message from "./message.js";
*/
//classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const person1 = new Person("lipsa", 21);
person1.introduce();

//Constructor and Methods
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayInfo() {
    console.log(`Product: ${this.name}, Price: $${this.price}`);
  }
}

const laptop = new Product("Laptop", 1200);
laptop.displayInfo();

//callback,function passed as an argument to another function.
//JavaScript functions are executed in the sequence they are called.
function printString(string, callback) {
  setTimeout(() => {
    console.log(string);
    callback();
  }, Math.floor(Math.random() * 100) + 1);
}
function printAll() {
  printString("H", () => {
    printString("Y", () => {
      printString("E", () => {});
    });
  });
}
printAll();

//without callback
/*
function printString(string) {
  setTimeout(() => {
    console.log(string);
  }, Math.floor(Math.random() * 100) + 1);//+1 means both num inclusive
}
function printAll() {
  printString("H");
  printString("Y");
  printString("E");
}
printAll();

//same function
//with aysnc and await
async function printAll(){
  await printString("A")
  await printString("B")
  await printString("C")
}
printAll()
*/
