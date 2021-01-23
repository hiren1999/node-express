const express = require("express");

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.write("<h1>Welcome to Node Express</h1>");
  res.write("<h1>NODE</h1>");
  res.send();
});

// u can use res.json also

app.get("/temp", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Hiren",
    },
    {
      id: 2,
      name: "Himanshu",
    },
  ]);
});

app.get("/contact", (req, res) => {
  res.status(200).send("https://www.thinktanker.io/contact.html");
});

app.listen(port, () => {
  console.log(`listing the port at ${port}`);
});
