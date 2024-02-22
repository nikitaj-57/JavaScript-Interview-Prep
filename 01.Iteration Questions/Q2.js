// Create a program that takes an array of strings as
// input and uses the map method to create a new array
// that consists of the lengths of each string.

const arr = ["bat", "ball", "paper", "mountain", "mirror"];

const result = arr.map((el) => el.length);
console.log(result); // [ 3, 4, 5, 8, 6 ]
