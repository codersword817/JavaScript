let a = 10;
let b = 10;

console.log(a === b);

let c = 1000;
let d = c;

console.log(c === d);

const obj1 = {
  name: "Aakash",
};
const obj2 = {
  name: "Aakash",
};

console.log(obj1 === obj2); // gives false
// because obj1 holds the address of the memory location where the {} is stored

const obj3 = {
  id: 1,
};
let obj4 = obj3; //  both stored the same address
console.log(obj3 === obj4);
obj4 = { id: 5 };
console.log(obj3 === obj4); //  returns false becase upon changing the {} creat a new mem location consisting of {} and its address ie begning assigned
// so addessses changed hence returns false;
