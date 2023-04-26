const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (distanceToPump <= mpg * fuelLeft){
        return true;
    } else {
        return false;
    }
};
console.log(zeroFuel(100, 4, 20))