const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wordSchema = new Schema(
  {
    value: {
      type: String,
      required: true,
      maxLength: 5,
    },
  },
  { timestamps: true }
);

const Word = mongoose.model('Word', wordSchema);
module.exports = Word;
