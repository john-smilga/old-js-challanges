function unique(str) {
  let tempStr = new Set();

  for (let letter of str) {
    if (tempStr.has(letter)) {
      return false;
    }
    tempStr.add(letter);
  }
  return true;
  // return new Set(str).size === str.length;
}

console.log(unique("abcdef"));
console.log(unique("abcbdefa"));
