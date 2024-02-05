// //------------------------------------------------------------------------------------------------
// class Queue {
//   constructor() {
//     this.items = [];
//   }

//   enqueue(element) {
//     this.items.push(element);
//   }
// }

// const myQueue = new Queue();
// //1
// fetch("https://jsonplaceholder.typicode.com/todos/3")
//   .then((response) => response.json())
//   .then((json) => {
//     myQueue.enqueue(json);

//     console.log("Queue items:", myQueue.items);
//   })
//   .catch((error) => console.log(error));
// //2
// fetch("https://jsonplaceholder.typicode.com/todos/2")
//   .then((response) => response.json())
//   .then((json) => {
//     myQueue.enqueue(json);

//     console.log("Queue items:", myQueue.items);
//   })
//   .catch((error) => console.log(error));

// //3
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => {
//     myQueue.enqueue(json);

//     console.log("Queue items:", myQueue.items);
//   })
//   .catch((error) => console.log(error));
//------------------------------------------------------------------------------------------------
class Queue {
  constructor() {
    this.items = [];
    this.isBusy = false;
  }

  enqueue(element) {
    this.items.push(element);
    const dequeuedItem = this.dequeue();
    console.log("my dequeued item:::::::::::::::", dequeuedItem);
  }
  dequeue(element) {
    if (this.items.length === 0) {
      console.log("Queue is empty");
      return false;
    } else if (this.isBusy === true) {
      console.log("Queue is busy");
      return false;
    } else {
      return this.items.shift(element);
    }
  }
}

const myQueue = new Queue();

async function fetchDataAndEnqueue(url) {
  this.isBusy = true;
  try {
    const response = await fetch(url);
    const json = await response.json();
    myQueue.enqueue(json);
  } catch (error) {
    console.log(error);
  }
}

// API calls one after the other
(async () => {
  await fetchDataAndEnqueue("https://jsonplaceholder.typicode.com/todos/1");
  await fetchDataAndEnqueue("https://jsonplaceholder.typicode.com/todos/2");
  await fetchDataAndEnqueue("https://jsonplaceholder.typicode.com/todos/3");
  console.log("my Queue items:::::::::", myQueue.items);
})();

/*
my Queue items::::::::: [
  { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false
  },
  { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false }
]
*/

/*
o/p: 

my dequeued item::::::::::::::: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
my dequeued item::::::::::::::: {
  userId: 1,
  id: 2,
  title: 'quis ut nam facilis et officia qui',
  completed: false
}
my dequeued item::::::::::::::: { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false }
my Queue items::::::::: []
*/
