const mongoose = require("mongoose");



const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    like: {
      type: [mongoose.Types.ObjectId],
      ref: 'User',
    },
    Date:{
      type:Date,
    },
    reported: {
      type: [mongoose.Types.ObjectId],
      ref:"User"
    },
    block: {
      type: Boolean,
      default: false
    }
  },{
    timestamps:true
  }
);

const postModel = mongoose.model("Post", postSchema);
module.exports = { postModel };