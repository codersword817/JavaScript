// arrays
// Higher Order Functions
/*
1. Map
2. Filter
3. Reduce
4. forEach 

*/

let marks = [
  { id: "s1", maths: 92 },
  { id: "s2", maths: 97 },
  { id: "s3", maths: 95 },
  { id: "s4", maths: 88 },
  { id: "s5", maths: 75 },
];

// 1. find the maxMarks
// 2. find the ppl >90 marks
// use  callback

function loopArray(callback) {
  for (let i = 0; i < marks.length; i++) {
    callback(marks[i]);
  }
}
let sum = 0;
function addNums(student) {
  sum += student.maths;
}

let maxScore = 0;

function getMaxScore(student) {
  maxScore = Math.max(maxScore, student.maths);
}

let toppers = [];
function marksMoreThan90(student) {
  if (student.maths > 90) {
    toppers.push(student);
  }
}

loopArray(addNums);
console.log(sum);

loopArray(getMaxScore);
console.log(maxScore);

loopArray(marksMoreThan90);
console.log(toppers);

// Callback=> fn passed as an arg to another fn

// Higher Order fn => fn that accepts another function as parameter or it returns the function

// get the maxArray using forEach()

let maxMarks_2 = 0;
marks.forEach((student) => {
  maxMarks_2 = Math.max(student.maths, maxMarks_2);
});

console.log("The Maximum score obtained is ", maxMarks_2);
