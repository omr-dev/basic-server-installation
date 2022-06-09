const http = require("http");
const host = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
  console.log("request url: ", req.url);
  res.setHeader("Content-Type", "text/plain");
  res.statusCode = 200;
  res.end("Hi, this is my first server");
});
server.listen(port, host, () => {
  console.log(`listening on: http://${host}:${port}`);
});
