const number = 29; // Change this to your desired number

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

if (isPrime(number)) {
    console.log(`${number} is a prime number.`);
} else {
    console.log(`${number} is NOT a prime number.`);
}
