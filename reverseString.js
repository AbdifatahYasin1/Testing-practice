const reverseString = (str) => {
  const reverse = str.split("").reverse().join("");
  return reverse;
};

module.exports = reverseString;
