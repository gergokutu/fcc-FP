// Sort an Array Alphabetically using the sort Method
// My 1st
const alphabeticalOrder = arr => {
  return arr.sort((a, b) => {
    return a === b
      ? 0
      : a < b
        ? -1
        : 1;
  })
};
console.log('Abc order >', alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));