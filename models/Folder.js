const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const FolderSchema = new Schema({
   name: {
      type: String,
      default: "New Folder",
   }
})