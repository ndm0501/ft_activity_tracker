/* eslint-disable */
// server.js
const express = require("express");
const app = express();
const data = require("./data");
const cors = require("cors");
const path = require("path");

const PORT = 5000;

// configure body parser for AJAX requests
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes

app.get("/data", (req, res) => {
  res.send(data);
});

// Bootstrap server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
