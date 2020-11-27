// Apply Functional Programming to Convert Strings to URL Slugs
// My 1st
const urlSlug = title => {
  return title
    .trim()
    .toLowerCase()
    .split(/\W+|_+/)
    .reduce((slug, word) => `${slug}-${word}`);
};

// My 2nd
// const urlSlug = title => {
//   return title
//     .trim()
//     .toLowerCase()
//     .split(/\W+|_+/)
//     .join("-");
// };

// Alt1
// function urlSlug(title) {
//   return title
//     .split(/\W/)
//     .filter(obj => {
//       return obj !== "";
//     })
//     .join("-")
//     .toLowerCase();
// };

// Alt2
// function urlSlug(title) {
//   return title
//     .toLowerCase()
//     .trim()
//     .split(/\s+/)
//     .join("-");
// };

console.log("Should be winter-is-coming >", urlSlug(" Winter Is  Coming "));