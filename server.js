const express = require("express");
const api = require("./Develop/routes/api.js");
const html = require("./Develop/routes/html.js");
// Initialize the app and create a port

const app = express();
const PORT = process.env.PORT || 3000;
// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", api);
app.use("/", html);
// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));