const http = require("http");
const PORT = 3000;
const employees = [
  {
    username: "lipsa",
    email: "lipsakevadiya@gmail.com",
    password: "lipsa123",
    confirm_password: "lipsa123",
  },
];

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.writeHead(200);
    res.end();
    return;
  }

  const handlePostRequest = (req, res, callback) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      callback(JSON.parse(body));
    });
  };

  const handleSignup = (req, res) => {
    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(employees));
    } else if (req.method === "POST") {
      handlePostRequest(req, res, (newEmployee) => {
        employees.push(newEmployee);
        console.log("Sign up data:::::::", employees);
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(newEmployee));
      });
    }
  };

  const handleLogin = (req, res) => {
    if (req.method === "POST") {
      handlePostRequest(req, res, (loginCredentials) => {
        const foundEmployee = employees.find(
          (employee) =>
            employee.email === loginCredentials.email &&
            employee.password === loginCredentials.password
        );

        if (foundEmployee) {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({ success: true, message: "Login successful" })
          );
        } else {
          res.writeHead(401, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "Invalid credentials" }));
        }
        console.log("after login:::::::", employees);
      });
    }
  };

  const handleList = (req, res) => {
    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(employees));
    }
  };

  const handleUpdateData = (req, res) => {
    if (req.method === "PUT") {
      handlePostRequest(req, res, (updatedEmployee) => {
        const emailToUpdate = updatedEmployee.email;

        const existingEmployeeIndex = employees.findIndex(
          (e) => e.email === emailToUpdate
        );

        if (existingEmployeeIndex !== -1) {
          if (
            updatedEmployee.new_email &&
            updatedEmployee.new_email !== emailToUpdate
          ) {
            const emailAlreadyExists = employees.some(
              (e) => e.email === updatedEmployee.new_email
            );

            if (emailAlreadyExists) {
              res.writeHead(400, { "Content-Type": "application/json" });
              res.end(
                JSON.stringify({
                  message: "New email already exists, update failed",
                })
              );
              return;
            }
          }

          employees[existingEmployeeIndex] = {
            ...employees[existingEmployeeIndex],
            ...updatedEmployee,
            confirm_password: updatedEmployee.password,
          };

          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              message: "Employee data updated successfully",
            })
          );
        } else {
          res.writeHead(404, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "Employee not found" }));
        }
        console.log("after updation:::::::", employees);
      });
    }
  };

  const handleDelete = (req, res) => {
    if (req.method === "DELETE") {
      handlePostRequest(req, res, ({ email }) => {
        const indexToDelete = employees.findIndex(
          (employee) => employee.email === email
        );

        if (indexToDelete !== -1) {
          employees.splice(indexToDelete, 1);

          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              message: "Employee deleted successfully",
            })
          );
        } else {
          res.writeHead(404, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Employee not found" }));
        }
        console.log("after deletion:::::::", employees);
      });
    }
  };

  const handleNotFound = (res) => {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found\n");
  };

  const url = new URL(req.url, `http://${req.headers.host}`);
  if (url.pathname === "/signup") {
    handleSignup(req, res);
  } else if (url.pathname === "/login") {
    handleLogin(req, res);
  } else if (url.pathname === "/list") {
    handleList(req, res);
  } else if (url.pathname === "/updatedata") {
    handleUpdateData(req, res);
  } else if (url.pathname === "/delete") {
    handleDelete(req, res);
  } else {
    handleNotFound(res);
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
