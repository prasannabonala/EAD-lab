const number = 12345;

function reverseNumber(n) {
    let reversed = 0;
    let num = n;
    while (num > 0) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return reversed;
}

console.log(`Reversed number of ${number} is ${reverseNumber(number)}`);
