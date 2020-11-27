// Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
const squareList = arr => {
  return arr
    .filter(posInt => posInt === posInt - (posInt % 1) && posInt > 0)
    .map(num => num * num);
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);