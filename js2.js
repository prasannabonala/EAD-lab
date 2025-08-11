const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number to display its multiplication table: ', (input) => {
    const number = Number(input);

    if (!isNaN(number)) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${number} x ${i} = ${number * i}`);
        }
    } else {
        console.log('Please enter a valid number.');
    }

    rl.close();
});
