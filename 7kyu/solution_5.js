// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive.
//     The string can contain any char.
//     Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str){
    let x = 0;
    let y = 0;
    for(let i=0; i<str.length;i++){
        console.log(i)
        let el = str[i].toLowerCase()
        console.log(el)
        if(el === "x"){
            x++
        }
        else if(el === "o"){
            y++
        }
    }
    return x === y
}

console.log(XO("xoxo"))
XO("xoxO")

// function X(str){
//     let w = 0;
//     for(let i=0; i<str.length;i++){
//         if(str[i] !== " ") {
//             w++;
//         }
//     }
//     return w
// }
//
// console.log(X('WWWWWWWWWWWWWWWWWW'))
// console.log(X('ww'))