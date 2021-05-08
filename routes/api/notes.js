const express = require("express");
const router = express.Router();
const Note = require("../../models/Note");
const validateNoteInput = require("../../validation/note");

router.post("/create", (req, res) => {
  const { errors, isValid } = validateNoteInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  } else {
    Note.create(req.body)
      .then((folder) => res.json(folder))
      .catch((err) => console.log(err));
  }
});

router.patch("/update/:noteId", async (req, res) => {
  const { errors, isValid } = validateNoteInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const note = await Note.findById(req.params.noteId);
  for (const key in req.body) {
    if (key === "_id") continue;
    note[key] = req.body[key];
  }
  note
    .save()
    .then((note) => res.json(note))
    .catch((err) => console.log(err));
});

router.get("/index/:ownerId", (req, res) => {
  const notes = Note.find({ owner: req.params.ownerId })
    .then((notes) => {
      notes.sort((a, b) => a.updateAt + b.updateAt);
      res.json(notes);
    })
    .catch((err) => res.json([]));
});

router.delete("/destroy/:id", (req, res) => {
   const note = Note.findById(req.params.id)
   const result = {_id: note._id, folder: note.folder}
  Note.findByIdAndDelete(req.params.id, (err) => {
    if (err) return console.log(err);
    res.json( result );
  });
});
module.exports = router;
