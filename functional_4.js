// Refactor Global Variables Out of Functions
// The global variable
const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae"
];

// Ver1
// const add = (bookList, bookName) => {
//   const list = [...bookList];
//   list.push(bookName);
//   return list;
// };

// const remove = (bookList, bookName) => {
//   const list = [...bookList];
//   const book_index = list.indexOf(bookName);

//   if (book_index >= 0) {
//     list.splice(book_index, 1);
//     return list;
//   };
// };

// Ver2
const add = (bookList, bookName) => [...bookList, bookName];
const remove = (bookList, bookName) => bookList.filter(book => bookName !== book);

const newBookList = add(bookList, 'A Brief History of Time');
const newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
const newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(`Should be [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae"
]`, bookList);