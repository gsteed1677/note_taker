const express = require("express");
const apiRoute = require("./Develop/routes/api.js");
const htmlRoute = require("./Develop/routes/html.js");
// Initialize the app and create a port

const app = express();
const PORT = process.env.PORT || 3000;
// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./Develop/public"));
app.use("/api", apiRoute);
app.use("/", htmlRoute);
// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));