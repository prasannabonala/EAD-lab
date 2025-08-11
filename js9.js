const str = "Hello, world!"; // Change this to your desired string

function reverseString(s) {
    let reversed = "";
    for (let i = s.length - 1; i >= 0; i--) {
        reversed += s[i];
    }
    return reversed;
}

console.log(`Original string: "${str}"`);
console.log(`Reversed string: "${reverseString(str)}"`);
