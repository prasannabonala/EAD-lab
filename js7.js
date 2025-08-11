const n = 10; // Change this to how many terms you want

function fibonacciSeries(terms) {
    if (terms <= 0) return [];
    if (terms === 1) return [0];

    const fib = [0, 1];
    for (let i = 2; i < terms; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

const series = fibonacciSeries(n);
console.log(`Fibonacci series up to ${n} terms:`);
console.log(series.join(', '));
