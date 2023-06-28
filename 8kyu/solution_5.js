
function countSheeps(arrayOfSheep) {
    let counter = 0;
    for(let i=0; i<arrayOfSheep.length; i++){
        console.log(arrayOfSheep[i])
        console.log(i)
        if(arrayOfSheep[i]) counter +=1
        console.log(counter)
    }
    console.log(counter)
    return counter
    // TODO May the force be with you
}

var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true,
false, false, true];

console.log(countSheeps(array1))


// function countSheeps(arrayOfSheep) {
//     // TODO May the force be with you
//     var num = 0;
//
//     for(var i = 0; i < arrayOfSheep.length; i++)
//         if(arrayOfSheep[i] == true)
//             num++;
//
//     return num;
// }