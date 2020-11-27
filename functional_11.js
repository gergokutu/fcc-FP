// Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
// My first
// const squareList = arr => {
//   return arr
//     .filter(posInt => posInt === posInt - (posInt % 1) && posInt > 0)
//     .map(num => num * num);
// };

// Alt1
// const squareList = (arr) => {
//   return arr
//     .filter(num => num > 0 && num % parseInt(num) === 0)
//     .map(num => Math.pow(num, 2));
// };

// Alt2
const squareList = arr => {
  return arr.reduce((sqrIntegers, num) => {
    return Number.isInteger(num) && num > 0
      ? sqrIntegers.concat(num * num)
      : sqrIntegers;
  }, []);
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log('Should be [ 25, 9 ] >', squaredIntegers);