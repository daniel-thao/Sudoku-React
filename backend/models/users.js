const { Schema, Types, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    wipSudokus: [
      {
        type: Types.ObjectId,
        ref: "Sudokus",
        isfinished: {
          type: Boolean,
          default: false,
        },
        savePoint: { type: Array },
      },
    ],
    completedSudokus: [
      {
        type: Types.ObjectId,
        ref: "Sudokus",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// 
const User = model("User", userSchema);
module.exports = { User, userSchema };
