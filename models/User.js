const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Folder = require("./Folder");
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
       type: String,
       required: true
    }
  },
  {
     timestamps: true,
     autoIndex: true
  })
UserSchema.pre('save', function(next){
   Folder.create({name: `${this.username}'s first folder`, owner: this._id})
   next()
})
module.exports = User = mongoose.model('users', UserSchema);
