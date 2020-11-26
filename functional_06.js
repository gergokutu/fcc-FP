// Implement your own map() on a prototype
// Do not forget the THIS!!!
const s = [23, 65, 98, 5];

// Array.prototype.myMap = function (callback) {
//   var newArray = [];

//   // Ver1
//   for (let i = 0; i < this.length; i++) {
//     newArray[i] = callback(this[i]);
//   };

//   // Ver2
//   // for (let i = 0; i < this.length; i++) {
//   //   newArray.push(callback(this[i]));
//   // };

//   // Ver3
//   // this.forEach(num => newArray.push(callback(num)));

//   return newArray;
// };

// Ver4 - recursive
// Array.prototype.myMap = function (callback, arr = [], i = 0) {
//   return i >= this.length
//     ? arr
//     : this.myMap(callback, arr.concat(callback(this[i])), i + 1);
// };

// Ver4 - recursive
// Do not forget the THIS > this.length, this[i]
// THIS refers to the Array on which the myMap is called!!!
Array.prototype.myMap = function (callback, arr = [], i = 0) {
  return i < this.length
    ? this.myMap(callback, arr.concat(callback(this[i])), i + 1)
    : arr;
};

const new_s = s.myMap(function (item) {
  return item * 2;
});
console.log('Should be [46, 130, 196, 10] >', new_s);