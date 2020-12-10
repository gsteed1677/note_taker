const { Router, response } = require("express");
const path = require("path");

const router = require("express").Router();

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "notes.html"))

});

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))

});
