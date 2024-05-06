function generateRange(min, max, step){
  const arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
}