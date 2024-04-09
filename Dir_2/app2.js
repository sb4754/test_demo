// example.js

// Define a function to calculate the factorial of a given number
function calculateFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * calculateFactorial(num - 1);
}

// Example usage of the calculateFactorial function
console.log("Factorial of 5:", calculateFactorial(5));