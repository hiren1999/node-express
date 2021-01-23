const path = require("path");
const express = require("express");
const app = express();
const port = 8000;

const staticPath = path.join(__dirname, "../public");

app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("hello from the express");
});

app.get("/about", (req, res) => {
  res.send("hello from the about page");
});

app.listen(8000, () => {
  console.log(`listing the port at ${port}`);
});
