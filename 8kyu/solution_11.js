//
// function sumArray(array) {
//     let sortedArr = array.sort()
//     console.log(sortedArr)
//     let delHighestNumber = sortedArr.pop()
//     console.log(delHighestNumber)
//     console.log(array)
//     let delMinNumber = array.shift()
//     console.log(delMinNumber)
//     console.log(array)
//     let sum = 0;
//     array.map((item) => sum += item);
//     return sum
//
// }

function sumArray1(array)  {
    if(array && array.length > 1){
        let sortArr = array.sort(function (a, b) {
            return a - b
        })
        console.log(array)
        let delTwoArgs = sortArr.slice(1, -1)
        console.log(delTwoArgs)
        let sumAllArgs = delTwoArgs.reduce((a, b) =>
                a + b,
            0

        )
        return sumAllArgs
    }}

console.log(sumArray1([1,2,3,4,5]))

