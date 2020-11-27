// Use the every Method to Check that Every Element in an Array Meets a Criteria
const checkPositive = arr => arr.every(num => num > 0);
console.log('Should be false >', checkPositive([1, 2, 3, -4, 5]));

// Use the some Method to Check that Any Elements in an Array Meet a Criteria
const anyPositive = arr => arr.some(num => num > 0);
console.log('Should be true >', anyPositive([1, 2, 3, -4, 5]));

// Introduction to Currying and Partial Application
//Un-curried function
function unCurried(x, y) {
  return x + y;
};

//Curried function
// function curried(x) {
//   return function (y) {
//     return x + y;
//   }
// };
//Alternative using ES6
const curried = x => y => x + y;
console.log('Should be 3 >', curried(1)(2)); // Returns 3

// Call a curried function in parts:
// You can save it into a variable
const funcForY = curried(1);
console.log(funcForY(2)); // Prints 3