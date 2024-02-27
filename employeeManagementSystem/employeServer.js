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
    // Handle preflight requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.writeHead(200);
    res.end();
    return;
  }

  // Parse the request URL
  const url = new URL(req.url, `http://${req.headers.host}`);

  // Check the path of the URL and handle different routes
  if (url.pathname === "/signup") {
    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(employees));
    } else if (req.method === "POST") {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk.toString();
      });

      req.on("end", () => {
        const newEmployee = JSON.parse(body);
        employees.push(newEmployee);
        console.log("Sign up data:::::::", employees);
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(newEmployee));
      });
    }
  } else if (url.pathname === "/login" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const loginCredentials = JSON.parse(body);
      const foundEmployee = employees.find(
        (employee) =>
          employee.email === loginCredentials.email &&
          employee.password === loginCredentials.password
      );

      if (foundEmployee) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: true, message: "Login successful" }));
      } else {
        res.writeHead(401, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Invalid credentials" }));
      }
      console.log("after login:::::::", employees);
    });
  } else if (url.pathname === "/list" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(employees));
  } else if (url.pathname === "/updatedata" && req.method === "PUT") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const updatedEmployee = JSON.parse(body);
      const emailToUpdate = updatedEmployee.email;

      const existingEmployeeIndex = employees.findIndex(
        (e) => e.email === emailToUpdate
      );

      if (existingEmployeeIndex !== -1) {
        // If email is being updated, check if the new email already exists
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

        // Update the employee data
        employees[existingEmployeeIndex] = {
          ...employees[existingEmployeeIndex],
          ...updatedEmployee,
          confirm_password: updatedEmployee.password,
          // newEmail: updatedEmployee.email,
        };

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({ message: "Employee data updated successfully" })
        );
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Employee not found" }));
      }
      console.log("after updation:::::::", employees);
    });

    // } else if (url.pathname === "/updatedata" && req.method === "PUT") {
    //   let body = "";

    //   req.on("data", (chunk) => {
    //     body += chunk.toString();
    //   });

    //   req.on("end", () => {
    //     const updatedEmployee = JSON.parse(body);
    //     // Extracts email from the parsed object.
    //     const emailToUpdate = updatedEmployee.email;

    //     const existingEmployeeIndex = employees.findIndex(
    //       (e) => e.email === emailToUpdate
    //     );

    //     if (existingEmployeeIndex !== -1) {
    //       // Update the employee data
    //       employees[existingEmployeeIndex] = {
    //         ...employees[existingEmployeeIndex],
    //         ...updatedEmployee,
    //         confirm_password: updatedEmployee.password,
    //       };

    //       res.writeHead(200, { "Content-Type": "application/json" });
    //       res.end(
    //         JSON.stringify({ message: "Employee data updated successfully" })
    //       );
    //     } else {
    //       res.writeHead(404, { "Content-Type": "application/json" });
    //       res.end(JSON.stringify({ message: "Employee not found" }));
    //     }
    //   });

    //-----------------------------------------------------------------------
  } else if (url.pathname === "/delete" && req.method === "DELETE") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk.toString();
    });

    req.on("end", () => {
      const { email } = JSON.parse(data);

      const indexToDelete = employees.findIndex(
        (employee) => employee.email === email
      );

      if (indexToDelete !== -1) {
        employees.splice(indexToDelete, 1);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Employee deleted successfully" }));
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Employee not found" }));
      }
      console.log("after deletion:::::::", employees);
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found\n");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

