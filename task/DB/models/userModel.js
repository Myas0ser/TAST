const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var CryptoJS = require("crypto-js");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      default: "User"
    }
  },
  {
    timestamps: true
  }
);
userSchema.pre(["insertMany"], async (next, docs) => {
  docs.password = await bcrypt.hash(docs.password, parseInt(process.env.SALT));
  console.log(docs)
  next();
});
const userModel = mongoose.model("User", userSchema);
module.exports = { userModel };