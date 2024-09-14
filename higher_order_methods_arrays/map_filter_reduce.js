const arr = [1, 2, 3, 4, 5];

const squared_arr = arr.map((ele) => ele * ele);
// returns a new copy of the elements
console.log(squared_arr);
console.log(arr);

const result = [
  { name: "Aakash", marks: 98 },
  { name: "Prakash", marks: 97 },
  { name: "Sahith", marks: 78 },
  { name: "Ramesh", marks: 87 },
];

const toppers = result.filter((student) => student.marks > 95);
console.log(toppers);

// Reduce returns a single value
// -> executes a reducer for each element of array and returns a songle value => accumulator
//  callback(accumulator, this[i], i, this )
//  function(callback, initialValue)
// if no intial mention then bydefault it takes arr[0] thus skipping first operation

const nums = [1, 2, 3, 4];

const reducedSum = nums.reduce((acc, ele) => {
  return acc + ele;
}, 0);

console.log(reducedSum);

// getMax using
let maxi = 0;
let maxScore_2 = result.reduce((acc, ele) => {
  if (acc > ele.marks) {
    return acc;
  } else {
    return ele.marks;
  }
});
console.log(maxScore_2);