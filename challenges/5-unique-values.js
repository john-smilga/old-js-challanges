function unique(str) {
  let values = [];

  for (let letter of str) {
    console.log(values.indexOf(letter));
    if (values.indexOf(letter) !== -1) {
      return false;
    }
    values = [...values, letter];
  }
  return true;

  let values = {};

  for (let letter of str) {
    if (values[letter]) {
      return false;
    }
    values[letter] = "exists";
  }
  return true;

  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) !== i) {
      return false;
    }
  }
  return true;
}

console.log(unique("abcdef"));
console.log(unique("abcadef"));
