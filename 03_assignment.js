// Create an IIFE (Immediately Invoked Function Expression) that calculates the square of a number and
// immediately displays the result.

(function() {
    let num = 10;
    if (num >= 0) {
        console.log(`Square of ${num} is ${num * num} `);
    } else {
        console.log(`Square of ${num} is not possible `);
    }
    

})();