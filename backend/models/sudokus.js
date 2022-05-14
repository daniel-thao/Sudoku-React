const { Schema, model } = require("mongoose");

const sudokuSchemas = new Schema(
  {
    answerKey: {
      type: Array,
    },
    startPoint: {
      type: Array,
    },
    difficulty: {
      type: String,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Sudokus = model('Sudokus', sudokuSchemas);


module.exports = {Sudokus, sudokuSchemas};
