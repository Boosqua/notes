const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const FolderSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    owner: {
       type: Schema.Types.ObjectId,
       ref: 'users',
      //  required: true
    },
    shareId: {
       type: String,
       index: true
    },
    public: {
       type: Boolean,
       default: true
    }
  },
  {
    timestamps: true,
    autoIndex: true,
  },
);
FolderSchema.pre('save', function(next) {
   if( !this.shareId ){
      this.shareId = Math.floor( Math.random() * Date.now() )
   }
   next()
})
module.exports = Folder = mongoose.model('folders', FolderSchema)