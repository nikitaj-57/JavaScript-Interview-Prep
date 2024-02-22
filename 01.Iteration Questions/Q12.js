// Array of Objects Sorting: Given an array of
// objects representing students with name, grade,
// and age properties, write a program to sort the
//  students first by grade (descending) and then
//  by age (ascending).

let students = [
  { name: "Alice", grade: 10, age: 15 },
  { name: "Bob", grade: 11, age: 16 },
  { name: "Charlie", grade: 9, age: 14 },
  { name: "David", grade: 12, age: 17 },
  { name: "Emma", grade: 10, age: 15 },
];

const sortedArray1 = students.sort((a, b) => b.grade - a.grade);
console.log(sortedArray1);
// [
//     { name: 'David', grade: 12, age: 17 },
//     { name: 'Bob', grade: 11, age: 16 },
//     { name: 'Alice', grade: 10, age: 15 },
//     { name: 'Emma', grade: 10, age: 15 },
//     { name: 'Charlie', grade: 9, age: 14 }
//   ]

const sortedArray2 = students.sort((a, b) => a.age - b.age);
console.log(sortedArray2);

// [
//     { name: 'Charlie', grade: 9, age: 14 },
//     { name: 'Alice', grade: 10, age: 15 },
//     { name: 'Emma', grade: 10, age: 15 },
//     { name: 'Bob', grade: 11, age: 16 },
//     { name: 'David', grade: 12, age: 17 }
//   ]
