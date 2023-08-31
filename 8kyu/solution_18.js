
function rentalCarCost(d) {
    let totalAmount = d * 40; // Total amount without any discounts

    if (d >= 7) {
        totalAmount -= 50; // $50 discount for renting 7 or more days
    } else if (d >= 3) {
        totalAmount -= 20; // $20 discount for renting 3 or more days
    }

    return totalAmount;
}

console.log(rentalCarCost(10))
console.log(rentalCarCost(2))
console.log(rentalCarCost(5))
console.log(rentalCarCost(7))
// Your solution here