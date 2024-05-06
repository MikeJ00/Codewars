function countPositivesSumNegatives(input) {
     if (input === null || input.length < 1) {
        return [];
    }
    var array = [0, 0];

    for(let i = 0; i < input.length; i++) {
        if(input[i] <= 0) {
            array[1] += input[i];
      } else {
            array[0] += 1;
      }
    }
    return array;
}