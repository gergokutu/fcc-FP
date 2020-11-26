// Return Part of an Array Using the slice Method
const sliceArray = (animals, beginSlice, endSlice) => (
  animals.slice(beginSlice, endSlice)
);
const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log("Should be [ Dog, Tiger ] >", sliceArray(inputAnim, 1, 3));

// Remove Elements from an Array Using slice Instead of splice
const nonMutatingSplice = cities => cities.slice(0, 3);
const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log("Should be [ Chicago, Delhi, Islamabad ] >", nonMutatingSplice(inputCities));

// Combine Two Arrays Using the concat Method
const nonMutatingConcat = (original, attach) => original.concat(attach);
const first = [1, 2, 3];
const second = [4, 5];
console.log("Should be [ 1, 2, 3, 4, 5 ] >", nonMutatingConcat(first, second));
console.log("Original first should be [ 1, 2, 3 ] >", first);
console.log("Original second should be [ 4, 5 ] >", second);

// Add Elements to the End of an Array Using concat Instead of push
{
  const nonMutatingPush = (original, newItem) => original.concat(newItem);
  const first = [1, 2, 3];
  const second = [4, 5];
  console.log(nonMutatingPush(first, second));
}