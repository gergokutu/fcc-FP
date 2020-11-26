// Return Part of an Array Using the slice Method
const sliceArray = (animals, beginSlice, endSlice) => (
  animals.slice(beginSlice, endSlice)
);

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log("Should be [ Dog, Tiger ] >", sliceArray(inputAnim, 1, 3));