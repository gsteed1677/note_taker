
const router = require("express").Router();

router.get("/api/notes/", function(req,res) {
        res.json(note_data);
});

router.post("/api/notes/", function(req,res) {
        note_data.push(req.body);
        res.json(true);
});

router.delete("/api/notes/", function(req,res) {
        note_data.length = 0;

        res.json({ok: true});
});

module.exports = router;