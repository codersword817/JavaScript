let a = 10;
let b = 10;

console.log(a === b);

let c = 1000;
let d = c;

console.log(c === d);

// ***NOTE: Objects are called Reference Types
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

function f(value) {
  value++;
}

let value = 10;

f(value);

console.log(value); /// pass by value

function f(obj1) {
  obj1.name = "Aakash";
}

let obj = {
  name: "Prakash",
};
f(obj);
console.log(obj);

// Pass by reference

/*

when you f(obj)==> it means give obj1  = obj same as discussed above 
but when you reassign in function then uk that it creates a new copy and starts pointing it and obj remains the same and obj1 points to newly created ones
*/

function manipulateArray(arr) {
  arr.push(10);
  arr = [1];
  return arr;
}

let arr = [1, 2, 3, 5];

manipulateArray(arr);
console.log(arr); // [1,2,3,4,5]

arr = manipulateArray(arr); // [1]
console.log(arr);
