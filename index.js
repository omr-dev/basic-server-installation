const express = require("express");
const path = require("path");

const app = express();
const host = "127.0.0.1";
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "site/index.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "site/contact.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "site/about.html"));
});
app.get("/blog", (req, res) => {
  res.sendFile(path.resolve(__dirname, "site/blog.html"));
});
app.get("/blog-single", (req, res) => {
  res.sendFile(path.resolve(__dirname, "site/blog-single.html"));
});

app.listen(port, host, () => {
  console.log(`listening on: http://${host}:${port}`);
});
