// Write a program that takes an array of objects
// representing books with title and author properties
// and a target title. Use the find method to locate and
// return the book object with the matching title.

const arr = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "The Catcher in the Rye", author: "J.D. Salinger" },
  { title: "Pride and Prejudice", author: "Jane Austen" },
];

const result = arr.find((el) => el.title === "1984");
console.log(result); // { title: '1984', author: 'George Orwell' }
