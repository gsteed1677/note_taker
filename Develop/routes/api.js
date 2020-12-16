
const router = require("express").Router();
const fs = require("fs");
const data = require("../db/db.json")
// const data = JSON.parse(fs.readFileSync("../db/db.json", "utf8"));

router.get("/notes", function(req,res) {
        console.log(req)
        res.json(data);
});

router.get("/notes/:id", function(req, res) {
        res.json(data[Number(req.params.id)]);

});

router.post("/notes", function(req,res) {
        console.log(req.body)
        let newNote = req.body;
        let specialId = (data.length).toString();

        newNote.id = specialId;
        data.push(newNote);
        
        fs.writeFileSync("./Develop/db/db.json", JSON.stringify(data), function(err) {
          if (err) throw (err);        
}); 

        res.json(data);    
});

router.delete("/notes/:id", function(req,res) {
        let noteId = req.params.id;
        let newId = 0;
        console.log(`Deleting note with id ${noteId}`);
        data = data.filter(currentNote => {
           return currentNote.id != noteId;
        });
        for (currentNote of data) {
            currentNote.id = newId.toString();
            newId++;
        }
        fs.writeFileSync("./Develop/db/db.json", JSON.stringify(data));
        res.json(data);
});

module.exports = router;