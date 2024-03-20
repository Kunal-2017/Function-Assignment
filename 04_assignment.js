// Que 4. Write a JavaScript function called calculateTax that takes an income as an argument and returns the
// amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
// function with various incomes.

function calculateTax(income) {
     let taxRate;
     return function() {
        //  inner function want to access taxRate variable of outer function while outer function is already executed
        //  closore comes here
        if (income >= 0 && income <= 300000) {
            taxRate = 0;
        } else if (income >= 300001 && income <= 600000) {
            taxRate = 5;
        } else if (income >= 600001 && income <= 900000) {
            taxRate = 10;
        } else if (income >= 900001 && income <= 1200000) {
            taxRate = 15;
        } else if (income >= 1200001 && income <= 1500000) {
            taxRate = 20;
        } else {
            taxRate = 30;
        }
        return income * taxRate * 0.01;
    }
    
}

let incomeTax = calculateTax(900001);
console.log(incomeTax());
// let incomeTax = calculateTax(900001);
// console.log(incomeTax(600000));
// let incomeTax = calculateTax(900001);
// console.log(incomeTax(1500001));
