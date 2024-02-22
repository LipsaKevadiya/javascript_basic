const http = require("http");
const PORT = 5000;

const employee = [
  { id: 1, name: "Lipsa", number: "12345" },
  { id: 2, name: "Nency", number: "67890" },
  { id: 3, name: "Honey", number: "54321" },
];

const server = http.createServer((req, res) => {
  // Parse the request URL
  const url = new URL(req.url, `http://${req.headers.host}`); // hostname and port information , ?id=1, http://localhost:3000
  // Check the path of the URL and handle different routes
  if (url.pathname === "/") {
    // Handle the root route
    if (req.method === "GET") {
      // Extracting Query Parameter
      // Parses the id query parameter from the request URL.
      // Extract the 'id' query parameter from the URL
      const idParam = url.searchParams.get("id");
      if (idParam) {
        // Find an employee with the specified id
        const id = employee.find((emp) => emp.id === parseInt(idParam));
        if (id) {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(id));
        } else {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("user not found\n");
        }
      }

      // Extract the 'name' query parameter from the URL
      const idName = url.searchParams.get("name");
      if (idName) {
        const namee = employee.find((emp) => name === idName);
        if (namee) {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(namee));
        } else {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("user not found\n");
        }
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(employee));
      }
    } else if (req.method === "POST") {
      let body = ""; //to store the request body

      // Listen for data events and concatenate the segments to the body string
      req.on("data", (segment) => {
        body += segment.toString();
      });
      // Listen for the end event, parse the body as JSON, and handle the request
      req.on("end", () => {
        // Parse the request body as JSON
        const newEmployee = JSON.parse(body);

        // Add validation for the fields only 3------------------------------

        const allowedFields = ["id", "name", "number"];
        const receivedFields = Object.keys(newEmployee);

        if (
          receivedFields.length !== allowedFields.length ||
          !receivedFields.every((field) => allowedFields.includes(field))
        ) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          res.end("Not found required fields in the request\n");
          return;
        }
        // Add validation for the "number" field-----------------------------

        if (newEmployee.number.length !== 5) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          res.end("Number should be 5 digits long\n");
          return;
        }

        // Add validation for unique id , Check if the provided id is already in use-------------------------------------

        if (employee.some((user) => user.id === newEmployee.id)) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          res.end("ID must be unique\n");
          return;
        }

        employee.push(newEmployee);
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(newEmployee));
      });
    }
  } else {
    // Handle unknown routes
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found\n");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//=======================================================================================================================================================

/*{
    "id":8,
    "name": "sara",
    "num": "54324",
    "number": "34567"
   
} */
