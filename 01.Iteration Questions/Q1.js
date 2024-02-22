// Write a program that takes an array of numbers
// as input and uses the filter method to return a
// new array containing only the even numbers.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = arr.filter((el) => el % 2 === 0);

console.log(result); // [ 2, 4, 6, 8, 10 ]
