
function doubleChar(str) {
    return str.split("").map((el)=>el + el)
        .join("")
}

console.log(doubleChar("string"))

console.log(("2,3,5,2,5").split())

function bonusTime(salary, bonus) {
    return (bonus===true) ? `£${salary*10}` : `£${salary}`;
}