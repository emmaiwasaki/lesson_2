const readline = require("readline-sync");
console.log("welcome to Calculator!");

console.log("what's the first number?");
let number1 = readline.question();

console.log("what's the second number?");
let number2 = readline.question();

console.log(
  "what operation would you liek to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide"
);
let operation = readline.question();

let output;
if (operation === '1') {
  // '1' represents addition
  output = Number(number1) + Number(number2);
} else if (operation === '2') {
  // '2' represents subtraction
  output = Number(number1) - Number(number2);
} else if (operation === '3') {
  // '3' represents multiplication
  output = Number(number1) * Number(number2);
} else if (operation === '4') {
  // '4' represents division
  output = Number(number1) / Number(number2);
}

console.log(`the result is: ${output}`);