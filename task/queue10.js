//------------------------------------------------------------------------------------------------

class Queue {
  constructor() {
    this.items = []; //store task
    this.isBusy = false;
  }
  // add new task (element) to the end of the queue using push
  // trigger dequeue process if the queue is not busy
  enqueue(element) {
    this.items.push(element);
    if (!this.isBusy) {
      this.dequeue(); // Start processing the queue
    }
    //console.log("Enqueued task");
  }
  // Process tasks in the queue that fire one after other
  async dequeue() {
    if (this.items.length === 0) {
      console.log("Queue is empty");
      return false;
    }

    if (this.isBusy) {
      console.log("Queue is busy");
      return false;
    }

    const element = this.items.shift(); //it dequeues task, sets isBusy to true
    this.isBusy = true; //processing task,enqueue

    try {
      //await pauses the execution of async dequeue(), until promise is resolved/rejected
      //tasks processed sequentially
      await element();
      console.log("Task completed successfully.");
    } catch (error) {
      console.error("Task failed with error--", error);
    } finally {
      //existing task won't be processed until isBusy is false
      this.isBusy = false; //resets isBusy, queue is not busy
      this.dequeue(); // Continue with the next task in queue
    }
  }
}

const myQueue = new Queue();

async function fetchDataAndEnqueue(url) {
  return new Promise(async (resolve, reject) => {
    const task = async () => {
      try {
        const response = await fetch(url);
        // if (!response.ok) {
        //   throw new Error("Error occur while fetching---", url);
        // }
        const json = await response.json();
        console.log("json--------------------", json);
        console.log("Fetched data for URL------", url);
        //resolve(json);
        return json;
      } catch (error) {
        //console.error("Error fetching data for URL---", url, error);
        reject(error); // if one URL is wrong, the subsequent fetchDataAndEnqueue calls won't be made.
        throw error;
      }
    };

    myQueue.enqueue(task);
    console.log("my Queue items----------", myQueue.items);
  });
}

// API calls one after the other
(async () => {
  const promises = [
    fetchDataAndEnqueue("https://jsonplaceholder.typicode.com/todos/1"),
    fetchDataAndEnqueue("https://jsonplaceholder.typicode.com/todos/2"),
    fetchDataAndEnqueue("https://jsonplaceholder.typicode.com/todos/3"),
    fetchDataAndEnqueue("3"),
    fetchDataAndEnqueue("https://jsonplaceholder.typicode.com/todos/1"),
  ];
  // await Promise.all(promises);
  // for (const promise of promises) {
  //   await promise.catch((error) => console.error("Error:", error));
  // }
  for (let i = 0; i < promises.length; i++) {
    const promise = promises[i];
    await promise.catch((error) => console.error("Error:", error));
  }
  // await fetchDataAndEnqueue("https://jsonplaceholder.typicode.com/todos/1");
  // await fetchDataAndEnqueue("https://jsonplaceholder.typicode.com/todos/2");
  // await fetchDataAndEnqueue("https://jsonplaceholder.typicode.com/todos/3");
  // log the items in the queue after API calls are enqueued
  console.log("my Queue items----------", myQueue.items);
  // while (myQueue.items.length > 0 || myQueue.isBusy) {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  // }
  //console.log("my Queue items-", myQueue.items); //[]
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
