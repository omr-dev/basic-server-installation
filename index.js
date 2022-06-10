const express = require("express");
const path = require("path");

const app = express();
const host = "127.0.0.1";
const port = 3000;

app.use((express.static('public')));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "contact.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "about.html"));
});
app.get("/users/:userId/movies/:movieId", (req, res) => {
  res.send(
    `<p>User ID: ${req.params.userId}</p><p>Movie ID: ${req.params.movieId}</p>`
  );
});

app.listen(port, host, () => {
  console.log(`listening on: http://${host}:${port}`);
});
