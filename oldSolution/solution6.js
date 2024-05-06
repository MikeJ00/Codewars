function sumOfDifferences(arr) {
  if (arr.length<=1){
    return 0
  }
  return Math.max(...arr) - Math.min(...arr)
}