const fs = require("fs");


const testAnswerKey = [
  [
    [5, 9, 3, 7, 4, 8, 6, 2, 1],
    [4, 2, 1, 6, 3, 9, 7, 5, 8],
    [8, 7, 6, 2, 1, 5, 9, 4, 3],
    [1, 6, 9, 4, 3, 7, 8, 5, 2],
    [2, 8, 5, 9, 1, 6, 3, 4, 7],
    [7, 3, 4, 5, 2, 8, 1, 6, 9],
    [9, 7, 5, 3, 1, 4, 2, 8, 6],
    [1, 6, 4, 8, 9, 2, 5, 7, 3],
    [3, 8, 2, 6, 5, 7, 4, 9, 1],
  ],
  [
    [2, 3, 9, 5, 6, 7, 8, 1, 4],
    [5, 8, 7, 1, 4, 2, 6, 9, 3],
    [6, 4, 1, 3, 8, 9, 7, 2, 5],
    [9, 8, 2, 1, 7, 5, 6, 4, 3],
    [3, 1, 4, 2, 6, 9, 8, 7, 5],
    [5, 6, 7, 8, 3, 4, 9, 1, 2],
    [7, 9, 1, 3, 5, 6, 4, 2, 8],
    [4, 3, 8, 9, 2, 1, 7, 5, 6],
    [2, 5, 6, 4, 7, 8, 1, 9, 3],
  ],
];

const testStartPoint = [
  [
    [0, 0, 3, 0, 4, 0, 6, 0, 0],
    [0, 0, 0, 6, 0, 9, 7, 0, 8],
    [8, 0, 0, 0, 1, 0, 0, 0, 3],
    [0, 6, 9, 0, 0, 0, 0, 5, 2],
    [0, 8, 0, 9, 0, 6, 0, 4, 0],
    [7, 3, 0, 0, 0, 0, 1, 6, 0],
    [9, 0, 0, 0, 1, 0, 0, 0, 6],
    [1, 0, 4, 8, 0, 2, 0, 0, 0],
    [0, 0, 2, 0, 5, 0, 4, 0, 0],
  ],
  [
    [2, 0, 0, 0, 6, 0, 0, 0, 0],
    [0, 8, 0, 0, 0, 0, 6, 9, 3],
    [0, 0, 1, 0, 8, 0, 0, 0, 0],
    [0, 0, 2, 1, 0, 5, 0, 0, 3],
    [0, 1, 0, 2, 0, 9, 0, 7, 0],
    [5, 0, 0, 8, 0, 4, 9, 0, 0],
    [0, 0, 0, 0, 5, 0, 4, 0, 0],
    [4, 3, 8, 0, 0, 0, 0, 5, 0],
    [0, 0, 0, 0, 7, 0, 0, 0, 3],
  ],
];

const testDifficulty = ["Beginner", "Beginner"];
/*




*/
const testing2 = () => {
  const finalArr = [];

  for (let i = 0; i < testAnswerKey.length; i++) {
    const final = {};

    let answerKey = [];
    let startPoint = [];
    let difficulty = "";

    for (let j = 0; j < 9; j++) {
      const ans = {};
      const sp = {};
      for (let k = 1; k < 10; k++) {
        let l = "";

        switch (k) {
          case 1:
            l = "One";
            break;
          case 2:
            l = "Two";
            break;
          case 3:
            l = "Three";
            break;
          case 4:
            l = "Four";
            break;
          case 5:
            l = "Five";
            break;
          case 6:
            l = "Six";
            break;
          case 7:
            l = "Seven";
            break;
          case 8:
            l = "Eight";
            break;
          case 9:
            l = "Nine";
            break;
          default:
            break;
        }
        ans[`place${l}`] = testAnswerKey[i][j][k - 1];
        sp[`place${l}`] = testStartPoint[i][j][k - 1];
      }
      answerKey.push(ans);
      startPoint.push(sp);
    }
    difficulty = testDifficulty[i];

    final.answerKey = answerKey;
    final.startPoint = startPoint;
    final.difficulty = difficulty;
    finalArr.push(final);
  }
  return finalArr;
};

// testing2();

// fs.writeFile('test.json', JSON.stringify(testing2()), err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //file written successfully
// })

module.exports = testing2();
// We export the result of the function which returns an object value
