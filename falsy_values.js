// Falsy values evaluate to False

// Expcept these remaining all are true
/*
"";
0;
-0;
0n; // BigInt 0
NaN;
null;
false;
undefined;
document.all;

*/

if ([]) {
  console.log("Heyy there I am an array of size 0");
} else {
  console.log("Hmmm I think I donot exist ");
}
