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

//Impartial function
function impartial(x, y, z) {
  return x + y + z;
};
const partialFn = impartial.bind(this, 1, 2);
console.log('Should be 13 >', partialFn(10)); // Returns 13

// Implement add
// My 1st
// function add(x) {
//   return function (y) {
//     return function (z) {
//       return x + y + z;
//     };
//   };
// };

// My 2nd
const add = x => y => z => x + y + z;
console.log('Should be 60 >', add(10)(20)(30));