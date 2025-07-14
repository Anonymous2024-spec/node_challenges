// 1. Explain the concept of JavaScript string template and interpolation.

// This is the concept where the template literlas(``) are used instead of the double quotes and they allow interpolation(which is allowing the insertion of variables or expressions directly into a string)
// demonstration
let names = "Shifah";
console.log(`Hello, ${names}!`);

// 2. What's the difference between a local and a global variable.

// A local variable is the one declared inside a function and is only accessible there whereas a global variable is the one declared outside the function bloack and can be accessible everywhere in the program

//   Global
// let message = "hello";
// function greet(params) {
//   console.log(message); //Accessible here coz its global
// }

// // local
// function greet() {
//   let name = "Naana"; // local
//   console.log(name);
// }

// console.log(name); // ❌ Error: name is not defined

// 3. JavaScript has a Math object. List and explain two constants and 3 methods the Math object has.
// The Math object provides constants and functions for mathematical operations. You don’t need to create it — it’s built-in.

//  Constants:
// Math.PI;
// Math.E;
// console.log(Math.PI); // 3.141592653589793
// console.log(Math.E); // 2.718281828459045
// //  Methods:
// Math.floor(x); //Rounds down to the nearest whole number.

// Math.ceil(x); //Rounds up to the nearest whole number.

// Math.random(); //Returns a number between 0 (inclusive) and 1 (exclusive).

// console.log(Math.floor(4.9)); // 4
// console.log(Math.ceil(4.1)); // 5
// console.log(Math.random()); // e.g., 0.

// 4. Explain the term hoisting and temporal dead zone in JavaScript.
// Hoisting is JavaScript's behavior of moving declarations (not assignments) to the top of their scope at runtime.

// console.log(a); // undefined
// var a = 5;
// // JS treats it like:

// var a;
// console.log(a);
// a = 5;
// // But only var gets hoisted like that. let and const are hoisted differently.

// // This is the time between entering a scope and when a let or const variable is declared, during which you can’t access it.

// console.log(b); // ❌ ReferenceError
// let b = 10;

// 5. Write a function that accepts a number and returns true if the number is an even number and returns false if the number is an odd number.

function num(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(num(4));
