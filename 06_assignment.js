// Que 6. Write a JavaScript function called curry that takes a function as an argument and returns a curried
// version of that function. The curried function should accept arguments one at a time and return a new
// function until all arguments are provided. Then, it should execute the original function with all arguments.
// Test the curry function with a function that adds two numbers.

function curry(num1) {
    return function(num2) {
        return num1 + num2;
        
    }
}
let sum = curry(10)(20);
console.log(`Sum is ${sum}`);

// another method
// function curry(num1) {
//     return function(num2) {
//         return `Sum of ${num1} and ${num2} is ${num1 + num2}`;
        
//     }
// }
// let sum = curry(10)(20);
// console.log(sum);