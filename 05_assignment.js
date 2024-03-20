// Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using
// recursion. Test the function with different inputs.

function factorial(num) {
  let result;
  if (num === 0 || num === 1) {
    return 1;
  } else {
    result = num * factorial(num - 1);
  }
  return result;
}
console.log(factorial(5)); // 120
console.log(factorial(6)); // 720
console.log(factorial(7)); // 5040
