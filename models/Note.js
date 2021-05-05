const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "users",
      index: true
      //  required: true
    },
    folder: {
      type: Schema.Types.ObjectId,
      ref: "folder",
      index: true
      //  required: true
    },
    body: {
      type: String
    },
    shareId: {
      type: String,
      index: true,
    },
    public: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default: "white",
      required: true,
    },
    tags: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
    autoIndex: true,
  }
);
NoteSchema.pre("save", function (next) {
  if (!this.shareId) {
    this.shareId = Math.floor(Math.random() * Date.now());
  }
  next();
});
module.exports = Folder = mongoose.model("notes", NoteSchema);
