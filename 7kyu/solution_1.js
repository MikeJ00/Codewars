// Return the number (count) of vowels in the given string.
//
//     We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
    return str.split("").filter(letter => 'aeiou'.includes(letter)).length;
}

console.log(getCount("adffdewqfr"))

function squareDigits(num) {
    return Array.from(String(num)).map(el => el ** 2).join("")
}

// Array.from(String(num))

console.log(squareDigits(234))