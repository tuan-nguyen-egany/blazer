const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const UserSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
    autoCreate: true,
  }
);

const BlogSchema = new Schema(
  {
    title: { type: String },
    userId: { type: ObjectId, ref: 'user' },
  },
  {
    timestamps: true,
    versionKey: false,
    autoCreate: true,
  }
);

const UserMD = mongoose.model('user', UserSchema);
const BlogMD = mongoose.model('blog', BlogSchema);

module.exports = { UserMD, BlogMD };
