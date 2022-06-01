function squareSum(numbers){
let square = numbers.reduce((acc, curVal) => {
    return acc + curVal ** 2;
  }, 0);
  return square;
}