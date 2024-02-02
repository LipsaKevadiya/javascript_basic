// promise created with constructor syntax-----
const count = true;
let countValue = new Promise(function (resolve, reject) {
  if (count) {
    resolve("There is a count value.");
  } else {
    reject("There is no count value");
  }
});
console.log(countValue);
// o/p:
// Promise { 'There is a count value.' }

const promise = new Promise(function (resolve, reject) {
  const string1 = "heyy..lipsa..";
  const string2 = "heyy..lipsa..";
  if (string1 === string2) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(function () {
    console.log("Promise resolved successfully");
  })
  .catch(function () {
    console.log("Promise is rejected");
  });

// o/p:
//Promise resolved successfully

//implementing several promises in a method-----------
function asynchronous_method() {
  let first_promise = new Promise((resolve, reject) => resolve("Hello"));
  let second_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(" it resolved..");
    }, 1000);
  });
  let combined_promise = Promise.all([first_promise, second_promise]);
  return combined_promise;
}

async function display() {
  let data = await asynchronous_method();
  console.log(data);
}

display();
// o/p:
// [ 'Hello', ' it resolved..' ]

//async,await-------------------------------------------

const getData = async () => {
  let y = await "Hello World";
  console.log(y);
};

console.log(1);
getData();
console.log(2);
// prints 2 before the “Hello World”, bcz of await keyword.
// o/p:
//1
//2
//Hello World

const helperPromise = function () {
  const promise = new Promise(function (resolve, reject) {
    const x = "heyy , hiii..";
    const y = "heyy , hiii..";
    if (x === y) {
      resolve("Strings are same");
    } else {
      reject("Strings are not same");
    }
  });

  return promise;
};

async function demoPromise() {
  try {
    let message = await helperPromise();
    console.log(message);
  } catch (error) {
    console.log("Error: " + error);
  }
}

demoPromise();

// o/p:
//Strings are same

//Fetch API Implementation---------------
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error));

// o/p:
// { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

//Creating an Asynchronous Function-----------
async function runProcess() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await response.json();
  console.log(json);
}

runProcess();
// o/p:
//// { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
