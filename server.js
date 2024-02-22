const http = require("http");
const port = 3000;

const server = http.createServer(function (req, res) {
  res.write("hello lipsa");
  res.end("hyy lipsa");
});

server.listen(port, function (error) {
  if (error) {
    console.log("Something went wrong", error);
  } else {
    console.log("Server is listening on port" + port);
  }
});
