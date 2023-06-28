

function findSmallestInt(args) {
    let smallest = args[0]
    console.log(smallest)
    for(let i = 0; i < args.length; i++){
        console.log(args[i])
        console.log(smallest)
        if(args[i] < smallest) smallest = args[i]
        console.log(smallest)
    }

    return smallest
}

console.log(findSmallestInt([78,56,232,12,8, -2]));

//second option

    function findSmallestInts(args) {
        return Math.min(...args)
    }


console.log(findSmallestInts([78,56,-22,12,8, -2]))