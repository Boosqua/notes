const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Folder = require("../../models/Folder")
const validateFolderInput = require('../../validation/folder')
router.post('/create', (req, res) => {
   const { errors, isValid } = validateFolderInput(req.body);
   if (!isValid) {
     return res.status(400).json(errors);
   } else {
      Folder.create(req.body)
         .then( folder => res.json(folder) )
         .catch( err => console.log(err) )
   }
})
router.patch('/update/:folderId', async (req, res) => {
   const { errors, isValid } = validateFolderInput(req.body);
   if (!isValid) {
     return res.status(400).json(errors);
   }

   const folder = await Folder.findById(req.params.folderId)
   folder.name = req.body.name;
   folder.save()
      .then( folder => res.json(folder) )
      .catch( err => console.log(err) )
})

router.get('/index/:ownerId', ( req,res) => {
   const folders = Folder.find({ owner: req.params.ownerId }).then((folders) =>{
      folders.sort((a, b) => a.updateAt + b.updateAt);
      res.json(folders)
   })
   .catch( err => res.json([]))
   
})

router.get('/test', (req, res) => {
   Folder.findOneAndUpdate(
     { owner: "608eb74ae74f3424e0ca7697" },
     { upsert: true },
     (err, doc) => {
         res.json(doc)
     }
   );
   
})
module.exports = router;