// script.js

// Define a function to generate Fibonacci series up to a given limit
function generateFibonacciSeries(limit) {
    let fibonacciSeries = [];
    let num1 = 0, num2 = 1, nextNum;

    // Add the first two numbers to the series
    fibonacciSeries.push(num1);
    fibonacciSeries.push(num2);

    // Generate subsequent Fibonacci numbers until the limit is reached
    while (true) {
        nextNum = num1 + num2;
        if (nextNum > limit) {
            break;
        }
        fibonacciSeries.push(nextNum);
        num1 = num2;
        num2 = nextNum;
    }

    return fibonacciSeries;
}

// Define a function to calculate the factorial of a given number
function calculateFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * calculateFactorial(num - 1);
}

// Example usage of the functions
console.log("Fibonacci Series up to 100:", generateFibonacciSeries(100));
console.log("Factorial of 5:", calculateFactorial(5));