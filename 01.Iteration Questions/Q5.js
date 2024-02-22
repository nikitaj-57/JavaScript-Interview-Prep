// Object Property Sum: Write a program that takes an
// object representing expenses, where the keys are
// expense categories (e.g., "food," "rent") and the
// values are amounts spent in each category.
// Calculate the total sum of expenses.

const expense = {
  food: 300,
  rent: 5000,
  electricityBill: 2000,
  water: 1000,
  shopping: 5000,
};

let sum = 0;

for (let key in expense) {
  sum += expense[key];
}

console.log(sum); // 13300
