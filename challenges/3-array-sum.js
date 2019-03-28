function ArraySum(arr) {
  let tempArr = arr.sort((a, b) => {
    return a - b;
  });
  let largest = tempArr.pop();
  let number = 0;
  tempArr.forEach(item => {
    number += item;
  });
  if (largest === number) {
    return "true";
  }
  return "false";
}

// keep this function call here
console.log(ArraySum([1, 2, 4, 6, 13]));
console.log(ArraySum([1, 2, 4, 6, 34, 22]));
