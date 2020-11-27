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

// Return a Sorted Array Without Changing the Original Array
const globalArray = [5, 6, 3, 2, 9];

// My 1st
const nonMutatingSort = arr => [...arr].sort((a, b) => a - b);

// Alt1
// Concat the original to an empty array and
// Sort it
// function nonMutatingSort(arr) {
//   return [].concat(arr).sort(function (a, b) {
//     return a - b;
//   });
// };

console.log('Original array >', globalArray);
console.log('Sorted array >', nonMutatingSort(globalArray));

// Split a String into an Array Using the split Method
// Note that the words are not always separated by spaces
// And the array should not contain punctuation.
const splitify = str => str.split(/\W|_/);
console.log("Should be [ 'Hello', 'World', 'I', 'am', 'code' ] >",
  splitify("Hello_World,I-am code")
);