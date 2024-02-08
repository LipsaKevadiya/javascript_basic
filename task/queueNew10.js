class Queue {
  constructor() {
    this.items = [];
    this.isBusy = false;
  }
  // for enqueue--------------
  enqueue(element) {
    this.items.push(element);
    if (!this.isBusy) {
      this.dequeue();
    }
  }
  // for dequeue------------------
  async dequeue() {
    if (this.items.length === 0) {
      // console.log("Queue is empty");
      return false;
    }

    if (this.isBusy) {
      console.log("Queue is busy");
      return false;
    }

    const element = this.items.shift();
    this.isBusy = true;

    try {
      await element();
      console.log("Task completed successfully.");
    } catch (error) {
      console.error("Task failed with error----------", error);
    } finally {
      this.isBusy = false;
      this.dequeue();
    }
  }
  // for fetching data-------------------
  async fetchDataAndEnqueue(url) {
    return new Promise(async (resolve, reject) => {
      const task = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          console.log("json--------------------", json);
          console.log("Fetched data for URL-------------", url);
          //resolve(json);
        } catch (error) {
          reject(error);
          //return Promise.reject(error);
          throw error;
        }
      };

      this.enqueue(task);
      console.log("my Queue items----------", this.items);
    });
  }

  // for tasks to be processed one after the other---------------
  async processPromisesSequentially(promises) {
    for (let i = 0; i < promises.length; i++) {
      const promise = promises[i];

      try {
        await promise;
      } catch (error) {
        console.error("Error:", error);
      }
    }
  }
}

const myQueue = new Queue();
myQueue.fetchDataAndEnqueue("https://jsonplaceholder.typicode.com/todos/1");
myQueue.fetchDataAndEnqueue("https://jsonplaceholder.typicode.com/todos/2");
myQueue.fetchDataAndEnqueue("https://jsonplaceholder.typicode.com/todos/3");
myQueue.fetchDataAndEnqueue("3");
myQueue.fetchDataAndEnqueue("https://jsonplaceholder.typicode.com/todos/1");

myQueue.processPromisesSequentially([]);
