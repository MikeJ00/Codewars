function bonusTime(salary, bonus) {
    return (bonus===true) ? `£${salary*10}` : `£${salary}`;
}

function removeEveryOther(arr){
    return arr.filter((e,i)=>!(i%2))
}