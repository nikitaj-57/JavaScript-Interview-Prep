// Object Sorting: Write a program that takes an
// array of objects representing products with name
// and price properties. Sort the products by price
// in ascending order.

let products = [
  { name: "Laptop", price: 999.99 },
  { name: "Smartphone", price: 699.99 },
  { name: "Headphones", price: 149.99 },
  { name: "Tablet", price: 399.99 },
  { name: "Camera", price: 799.99 },
];

const sortedArr = products.sort((a, b) => a.price - b.price);
console.log(sortedArr);

// [
//     { name: 'Headphones', price: 149.99 },
//     { name: 'Tablet', price: 399.99 },
//     { name: 'Smartphone', price: 699.99 },
//     { name: 'Camera', price: 799.99 },
//     { name: 'Laptop', price: 999.99 }
//   ]
