// Define a function to calculate the factorial of a number
function factorial(n) {
    // Base case: If n is 0 or 1, factorial is 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: Multiply n by factorial of (n - 1)
    else {
        return n * factorial(n - 1);
    }
}

// Test the factorial function
const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is: ${result}`);