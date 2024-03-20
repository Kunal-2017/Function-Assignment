// Que 1. Create an arrow function called square that takes a number as an argument and returns its square. Use
// the arrow function to calculate the square of a given number and display the result.


let square = (num) => {
   if (num < 0) {
    return "Not Possible"
   } else {
    return num * num ;
   }
   
};
let number = 10;
console.log(`Square of ${number} is ${square(number)}`);
