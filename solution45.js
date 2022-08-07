function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

// or

function findNeedle(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === "needle") return "found the needle at position " + i;
  }
}
