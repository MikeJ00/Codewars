

function sumSquares(array) {
    let arr = array.map(el => el**2 )
    let totalSum = arr.reduce(function(a, b) {
        return a + b;
    });
    return totalSum
}

console.log(sumSquares([1,3,7,9,0,2,3,5]))

function sumSquaress(array) {
    var result = 0;
    for (let i = 0; i < array.length; i++) {
        console.log(array)
        console.log(array.length)
        result += array[i] ** 2;
        console.log(array[i])
    }
    return result;
}
console.log(sumSquaress([8,5,3,2]))