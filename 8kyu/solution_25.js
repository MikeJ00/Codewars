
function enough(cap, on, wait) {
    let sumCurrent = wait + on
    if(sumCurrent <= cap){
        return 0
    } else {
        return sumCurrent - cap
    }
}

enough(100,60,20)
enough(100,100,10)
enough(5,0,6)

console.log(enough(100,60,20))
console.log(enough(5,0,11))