{
  // TDZ begins
  //   console.log(x);

  let x; // Temporal Dead Zone ends (until the variable is declared)
  console.log(x);
  x = 10;
  console.log(x);
}

{
  //console.log(x); // TDZ begins

  const x = "Hello"; // while declaring only should be assigned and not changed , TDZ ends
  console.log(x);
}

let x = 20;
{
  console.log(x); // error

  // Variable shadowing
  let x = 400;
  console.log(x);
}
