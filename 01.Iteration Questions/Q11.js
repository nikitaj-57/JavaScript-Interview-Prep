// Find Longest Word: Write a program that takes
//  an array of strings and uses the find method
//  to find the longest word (string with the most
// characters) in the array.

const findLongestWord = (wordsArr) => {
  let longestWord = "";

  wordsArr.find((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
};

let wordsArray = ["apple", "banana", "orange", "kiwi", "strawberry"];
const longestWord = findLongestWord(wordsArray);
console.log(longestWord); // strawberry
