export {};

// EXAMPLE 1 - Convert an object to an Array in TypeScript

const obj = { name: 'Bobby', country: 'Chile' };

const keys = Object.keys(obj);
console.log(keys); // 👉️ ['name', 'country']

const values = Object.values(obj);
console.log(values); // 👉️ ['Bobby', 'Chile']

const entries = Object.entries(obj);
console.log(entries); // 👉️ [['name', 'Bobby'], ['country', 'Chile']]

// ---------------------------------------------------

// // EXAMPLE 2 - Convert an Object's values to an Array in TypeScript

// const obj = { name: 'Bobby Hadz', country: 'Chile' };

// const values = Object.values(obj);
// console.log(values); // 👉️ ['Bobby Hadz', 'Chile']

// ---------------------------------------------------

// // EXAMPLE 3 - Convert an Object's entries to an Array in TypeScript

// const obj = { name: 'Bobby Hadz', country: 'Chile' };

// // 👇️ const entries: [string, string][]
// const entries = Object.entries(obj);
// console.log(entries); // 👉️ [['name', 'Bobby Hadz'], ['country', 'Chile']]

// ---------------------------------------------------

// // EXAMPLE 4 - Iterating over an array of key-value pairs with forEach()

// const obj = { name: 'Bobby', country: 'Chile' };

// // 👇️ const entries: [string, string][]
// const entries = Object.entries(obj);
// console.log(entries); // 👉️ [['name', 'Bobby'], ['country', 'Chile']]

// entries.forEach(([key, value]) => {
//   // 👇️ name Bobby, country Chile
//   console.log(key, value);
// });
