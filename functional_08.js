// Implement the filter Method on a Prototype
// The global variable
const s = [23, 65, 98, 5];

// Ver1
// Array.prototype.myFilter = function (callback) {
//   const newArray = [];

//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i])) newArray.push(this[i]);
//   };

//   return newArray;
// };

// Ver2
Array.prototype.myFilter = function (callback) {
  const newArray = [];

  this.forEach(number => {
    if (callback(number)) newArray.push(number);
  })

  return newArray;
};

const new_s = s.myFilter(function (item) {
  return item % 2 === 1;
});
console.log('Should be [ 23, 65, 5 ] >', new_s);