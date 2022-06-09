const http = require("http");
const fs = require("fs");
const host = "127.0.0.1";
const port = 3000;

const indexPage = fs.readFileSync("index.html");
const aboutPage = fs.readFileSync("about.html");
const contactPage = fs.readFileSync("contact.html");
const notFoundPage = fs.readFileSync("404.html");
const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end(indexPage);
      break;
    case "/about":
      res.end(aboutPage);
      break;
    case "/contact":
      res.end(contactPage);
      break;
    default: {
      
      res.statusCode = 404;
      res.end(notFoundPage);
    }
  }
});
server.listen(port, host, () => {
  console.log(`listening on: http://${host}:${port}`);
});
