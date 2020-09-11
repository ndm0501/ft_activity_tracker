/* eslint-disable */
// server.js
const express = require("express");
const app = express();
const data = require("./data");
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 5000;

// configure body parser for AJAX requests
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

//cors

// routes

app.get("/", (req, res) => {
  res.send(data);
});

// Bootstrap server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
