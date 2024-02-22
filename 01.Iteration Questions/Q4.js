// Create a program that takes an array of people
// objects with name and age properties. Use filter
// to create a new array of people who are older than
// a specified age and then use map to create an array
// containing only their names.

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 31 },
  { name: "Charlie", age: 22 },
  { name: "David", age: 35 },
  { name: "Eve", age: 28 },
];

const ageAbove30 = people.filter((person) => person.age > 30);
console.log(ageAbove30);
// [ { name: 'Bob', age: 31 }, { name: 'David', age: 35 } ]

const names = ageAbove30.map((person) => person.name);
console.log(names); // [ 'Bob', 'David' ]

const alternateSolution = people
  .filter((person) => person.age > 30)
  .map((person) => person.name);
console.log(alternateSolution);
