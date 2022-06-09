function fakeBin(x){
  return x.split('').map(num => num > 4 ? 1 : 0).join('');
}