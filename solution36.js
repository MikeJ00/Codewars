var findAverage = function (nums) {
  result = 0
  for(let q=0; q<nums.length; q++){
    result += nums[q];
  }
  return result / nums.length;
}