// arr.forEach(callback)
// callback(this[i], i, this )

const students = [
  { name: "Aakash", marks: 90 },
  { name: "Subhash", marks: 78 },
  { name: "Arun", marks: 88 },
  { name: "Shravan", marks: 83 },
];

// get max marks students
let max_marks = 0;
let stud_name;
students.forEach((ele, idx) => {
  if (max_marks < ele.marks) {
    max_marks = ele.marks;
    stud_name = ele.name;
  }
});

console.log(`${max_marks} Marks obtained by ${stud_name}`);
