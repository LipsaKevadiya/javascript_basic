// const http = require("http");

// // const employee = [];
// const server = http.createServer((req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   if (req.method === "OPTIONS") {
//     // Handle preflight requests
//     res.setHeader("Access-Control-Allow-Methods", "POST");
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//     res.writeHead(200);
//     res.end();
//     return;
//   }

//   if (req.method === "POST" && req.url === "/signup") {
//     let body = "";

//     // Listen for data events to accumulate the POST data
//     req.on("data", (chunk) => {
//       body += chunk.toString();
//     });

//     // Listen for the end event to process the entire data
//     req.on("end", () => {
//       const data = JSON.parse(body);

//       // At this point, 'body' contains the complete POST data
//       console.log("Received data:", body);
//       // console.log("Username:", data.username);
//       // console.log("Email:", data.email);
//       // You can process the data further, e.g., save it to a database

//       // Send a response to the client
//       // res.writeHead(200, { "Content-Type": "text/plain" });
//       // res.end("Data received successfully!");
//       // employee.push(formData);
//       const responseData = { message: "Data received successfully!" };
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(responseData));
//     });
//   } else {
//     // Handle other requests or routes
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Not Found");
//   }
// });

// const PORT = 3000;

// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

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
    res.setHeader("Access-Control-Allow-Methods", "POST");
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
        console.log(employees);
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
    });
  } else if (url.pathname === "/list" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(employees));
    // } else if (url.pathname === "/signin" && req.method === "DELETE") {
    //   const emailToDelete = url.searchParams.get("email");

    //   if (!emailToDelete) {
    //     res.writeHead(400, { "Content-Type": "application/json" });
    //     res.end(
    //       JSON.stringify({ success: true, message: "Missing email parameter" })
    //     );
    //     return;
    //   }

    //   const indexToDelete = employees.findIndex(
    //     (employee) => employee.email === emailToDelete
    //   );

    //   if (indexToDelete !== -1) {
    //     const deletedEmployee = employees.splice(indexToDelete, 1)[0];
    //     res.writeHead(200, { "Content-Type": "application/json" });
    //     res.end(JSON.stringify(deletedEmployee));
    //   } else {
    //     res.writeHead(404, { "Content-Type": "application/json" });
    //     res.end(JSON.stringify({ message: "User not found" }));
    //   }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found\n");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
