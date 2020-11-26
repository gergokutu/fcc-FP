// Avoid Mutations and Side Effects Using Functional Programming
// Increment but not change the global fixedValue
var fixedValue = 4;
const incrementer = () => fixedValue + 1;
console.log('Should be 5 >', incrementer());
console.log('fixedValue should be 4 >', fixedValue);

// Pass Arguments to Avoid External Dependence in a Function
const incrementer2 = (value) => value + 1;
console.log('Should be 5 >', incrementer2(fixedValue));
console.log('fixedValue should be 4 >', fixedValue);