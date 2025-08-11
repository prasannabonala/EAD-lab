const number = 5; // Change this to your desired number

function factorial(n) {
    if (n < 0) return undefined; // Factorial not defined for negative numbers
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

console.log(`Factorial of ${number} is ${factorial(number)}`);
