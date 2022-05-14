const { userSchema } = require("../models/users");
const { sudokuSchemas } = require("../models/sudokus");


const mongoose = require("mongoose");
const users = require("./userSeeds");
const sudokus = require("./sudokuSeeds");

const conn = mongoose.createConnection(
  "mongodb+srv://danieluser:danieluser@cluster0.ekxov.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

const createUsers = async (userSeed) => {
  const User = conn.model("User", userSchema);

  await Promise.all(
    userSeed.map(async ({ username, email, password, wipSudokus, completedSudokus }) => {
      await User.create({ username, email, password, wipSudokus, completedSudokus });
    })
  );
};








const createSudokus = async (sudokuSeed) => {
  const Sudokus = conn.model("Sudokus", sudokuSchemas);

  await Promise.all(
    sudokuSeed.map(async ({ answerKey, startPoint, difficulty }) => {
      await Sudokus.create({ answerKey, startPoint, difficulty });
    })
  );
};








const runSeeds = async () => {
  await createUsers(users);
  await createSudokus(sudokus);

  conn.close(() => {
    console.log("This should be the last thing");
    process.exit(0);
  });
};

runSeeds();
