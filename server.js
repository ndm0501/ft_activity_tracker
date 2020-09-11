/* eslint-disable */
// server.js
const express = require("express");
const app = express();
const data = require("./data");
const cors = require("cors");
const path = require("path");

// configure body parser for AJAX requests
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes

app.get("/data", (req, res) => {
  res.send(data);
});

//serve static assests if in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
