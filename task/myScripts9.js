// Static data
const userData = {
  //   username: "lipsaK",
  username: "lipsa",
  password: "password",
};

const userTasks = [
  { id: 1, title: "work" },
  //{ id: 2, title: "Task 2 -sleep" },
];

// Function for user authentication
function authenticateUser() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  return new Promise((resolve, reject) => {
    if (username === userData.username && password === userData.password) {
      resolve(userData);
      //   resolve(`"${userData}" logged successfully!`);
    } else {
      reject("Invalid credentials, try again later.");
    }
  })
    .then((userData) => {
      //   console.log(`${userData.username}`);
      console.log(userData); //{username: 'lipsa', password: 'password'}
      document.getElementById("loginSection").style.display = "none"; // hides the login section on the webpage
      document.getElementById("taskSection").style.display = "block"; // task section visible on the webpage
      //   document.getElementById(
      //     "loginMessage"
      //   ).innerText = `Welcome, ${user.username}!`;

      fetchTasks();
    })
    .catch((error) => {
      document.getElementById("loginMessage").innerText = error;
    });
}

// Function for fetch tasks
function fetchTasks() {
  return new Promise((resolve, reject) => {
    // resolve with userTasks
    resolve(userTasks);
  })
    .then((tasks) => {
      const taskList = document.getElementById("taskList");
      // clear existing content of the task list
      taskList.innerHTML = "";

      tasks.forEach((task) => {
        const listItem = document.createElement("li");
        //creates a new list item <li> element for each task.
        listItem.innerText = task.title;
        taskList.appendChild(listItem);
        // new created <li> containing task title to the existing <ul> with the ID "taskList."
      });
    })
    .catch((error) => {
      console.error("Error fetching tasks:", error);
    });
}

// Function for new task data
// data needs to be sent to a existing list
function postNewTask() {
  const newTaskTitle = document.getElementById("newTask").value;

  // Check if the new task title is not empty
  if (newTaskTitle.trim() !== "") {
    // to post new task data, Passes the created object as an argument to the postData function
    postData({ title: newTaskTitle })
      .then((response) => {
        document.getElementById("postMessage").innerText = response;
        // Add the new task to the existing userTasks array
        userTasks.push({ id: userTasks.length + 1, title: newTaskTitle }); // id will be 2
        fetchTasks();
      })
      .catch((error) => {
        document.getElementById("postMessage").innerText = error;
      });
  } else {
    document.getElementById("postMessage").innerText =
      "Please enter a valid task.";
  }
}

// Function for posting data
function postData(data) {
  // to post data
  return new Promise((resolve, reject) => {
    // success or failure based on a condition, data.title includes "error"
    if (data.title.includes("error")) {
      reject("Error posting data.");
    } else {
      // resolve with a success message
      resolve(`Task "${data.title}" posted successfully!`);
    }
  });
}
// console.log(userTasks.length);
