function flatten(arr) {
  let tempArr = arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      let temp = flatten(curr);
      return [...acc, ...temp];
    }
    return [...acc, curr];
  }, []);
  return tempArr;
}

console.log(flatten([1, 2, [2, [3], 3], [[[20]]]]));
