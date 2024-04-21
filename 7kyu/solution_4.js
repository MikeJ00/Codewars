// This time no story, no theory. The examples below show you how to write function accum:
//
//     Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    return s.split('').map((el,i)=>el.toUpperCase() + el.toLowerCase()
        .repeat(i)).join("-")
}
function aa(s){
    return s.split('').map(el=>el)
}

function accums(str){
    let letters = str.split('');
    let result = []
    for(let i=0; i < letters.length ; i++){
        console.log(i)
        console.log(letters[i])
        result.push(letters[i].toUpperCase() + Array(i+1).join(letters[i]).toLowerCase())
    }
    return result.join('-----')
}

console.log(accums("srgvwwWRTw"))

console.log(accum("ZpglnRxqenU"))
console.log(accum("NyffsGeyylB"))
console.log(aa("NyffsGeyylB"))