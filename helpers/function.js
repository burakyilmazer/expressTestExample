const factorial = (num) => {
  if (num < 0) {
    throw new Error("num must not be negative");
  }
  if (num <= 1) {
      // Both 1! and 0! are defined as 1
      return 1;
  }
  return num * factorial(num - 1);
}

module.exports = {
  factorial,
}