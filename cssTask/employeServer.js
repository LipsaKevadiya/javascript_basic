// const http = require("http");
// const PORT = 5000;

// const employee = [
//   { id: 1, name: "Lipsa", number: "12345" },
//   { id: 2, name: "Nency", number: "67890" },
//   { id: 3, name: "Honey", number: "54321" },
// ];

// const server = http.createServer((req, res) => {
//   // Parse the request URL
//   const url = new URL(req.url, `http://${req.headers.host}`); // hostname and port information , ?id=1, http://localhost:3000
//   // Check the path of the URL and handle different routes
//   if (url.pathname === "/") {
//     // Handle the root route
//     if (req.method === "POST") {
//       let body = ""; //to store the request body

//       // Listen for data events and concatenate the segments to the body string
//       req.on("data", (segment) => {
//         body += segment.toString();
//       });
//       // Listen for the end event, parse the body as JSON, and handle the request
//       req.on("end", () => {
//         // Parse the request body as JSON
//         const newEmployee = JSON.parse(body);

//         // Add validation for the fields only 3------------------------------

//         const allowedFields = ["id", "name", "number"];
//         const receivedFields = Object.keys(newEmployee);

//         if (
//           receivedFields.length !== allowedFields.length ||
//           !receivedFields.every((field) => allowedFields.includes(field))
//         ) {
//           res.writeHead(400, { "Content-Type": "text/plain" });
//           res.end("Not found required fields in the request\n");
//           return;
//         }
//         // Add validation for the "number" field-----------------------------

//         if (newEmployee.number.length !== 5) {
//           res.writeHead(400, { "Content-Type": "text/plain" });
//           res.end("Number should be 5 digits long\n");
//           return;
//         }

//         // Add validation for unique id , Check if the provided id is already in use-------------------------------------

//         if (employee.some((user) => user.id === newEmployee.id)) {
//           res.writeHead(400, { "Content-Type": "text/plain" });
//           res.end("ID must be unique\n");
//           return;
//         }

//         employee.push(newEmployee);
//         res.writeHead(201, { "Content-Type": "application/json" });
//         res.end(JSON.stringify(newEmployee));
//       });
//     }
//   } else {
//     // Handle unknown routes
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("404 Not Found\n");
//   }
// });

// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

//=======================================================================================================================================================

/*{
    "id":8,
    "name": "sara",
    "num": "54324",
    "number": "34567"
   
} */

// const http = require("http");
// const url = require("url");
// const querystring = require("querystring");

// const server = http.createServer((req, res) => {
//   if (req.method === "POST" && req.url === "/signup") {
//     let body = "";

//     req.on("data", (chunk) => {
//       body += chunk;
//     });

//     req.on("end", () => {
//       const postData = querystring.parse(body);
//       console.log("Received data:", postData);

//       // Perform signup logic here (e.g., save data to a database)

//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ message: "Signup successful" }));
//     });
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Not Found");
//   }
// });

// const port = 3000;

// server.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

// const http = require("http");
// const url = require("url");
// const querystring = require("querystring");

// const server = http.createServer((req, res) => {
//   if (req.method === "POST" && req.url === "/signup") {
//     let body = "";

//     req.on("data", (chunk) => {
//       body += chunk;
//     });

//     req.on("end", () => {
//       const postData = querystring.parse(body);
//       console.log("Received data:", postData);

//       // Perform signup logic here (e.g., save data to a database)

//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ message: "Signup successful" }));
//     });
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Not Found");
//   }
// });

// const port = 3000;

// server.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
//----------------------------------------------------------------------------------------
// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.method === "POST") {
//     let body = "";

//     req.on("data", (chunk) => {
//       body += chunk.toString();
//     });

//     req.on("end", () => {
//       // Parse form data without using querystring
//       const formData = body.split("&").reduce((acc, pair) => {
//         const [key, value] = pair.split("=");
//         acc[key] = decodeURIComponent(value.replace(/\+/g, " "));
//         return acc;
//       }, {});

//       // Validate form data here if needed

//       // Log the form data
//       console.log("Received form data:", formData);

//       // Send a response back to the client
//       res.writeHead(200, { "Content-Type": "text/plain" });
//       res.end("Form data received successfully");
//     });
//   } else {
//     // Handle other HTTP methods or routes if needed
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Not Found");
//   }
// });

// const PORT = 3000;

// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
//---------------------------------------------------------------------------------working

const http = require("http");

// const employee = [];
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

  if (req.method === "POST" && req.url === "/signup") {
    let body = "";

    // Listen for data events to accumulate the POST data
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    // Listen for the end event to process the entire data
    req.on("end", () => {
      const data = JSON.parse(body);

      // At this point, 'body' contains the complete POST data
      console.log("Received data:", body);
      console.log("Username:", data.username);
      console.log("Email:", data.email);
      // You can process the data further, e.g., save it to a database

      // Send a response to the client
      // res.writeHead(200, { "Content-Type": "text/plain" });
      // res.end("Data received successfully!");
      // employee.push(formData);
      const responseData = { message: "Data received successfully!" };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(responseData));
    });
  } else {
    // Handle other requests or routes
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
