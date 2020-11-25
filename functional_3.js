// Avoid Mutations and Side Effects Using Functional Programming
// Increment but not change the global fixedValue
var fixedValue = 4;
const incrementer = () => fixedValue + 1;
console.log('Should be 5 >', incrementer());
console.log('fixedValue should be 4 >', fixedValue);