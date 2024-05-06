function digitize(n) {
  return arr = String(n).split("").reverse().map(Number);
/*second way
function digitize(num) {
    return num.toString().split('').reverse().map(Number)};*/
}