//bring in requirements
const express = require("express");
const html = require("./Develop/routes/html.js");
const api = require("./Develop/routes/api.js");

const app = express();

//PORT
const PORT = process.env.PORT || 9000;

//parsing data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

