// Use the every Method to Check that Every Element in an Array Meets a Criteria
const checkPositive = arr => arr.every(num => num > 0);
console.log('Should be false >', checkPositive([1, 2, 3, -4, 5]));