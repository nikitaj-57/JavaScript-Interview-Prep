// 5. **Nested Object Count**: Create a program
// that takes a nested object representing a family
// tree. Write a function that recursively counts
// the total number of family members in the tree.
// (DO)

let familyTree = {
  name: "John",
  age: 50,
  children: [
    {
      name: "Emily",
      age: 25,
      children: [
        {
          name: "Sophia",
          age: 5,
          children: [],
        },
        {
          name: "Michael",
          age: 3,
          children: [],
        },
      ],
    },
    {
      name: "David",
      age: 20,
      children: [],
    },
  ],
};

function countFamilyMembers(node) {
  let count = 1; // Start with 1 for the current node
  if (node.children) {
    for (let child of node.children) {
      count += countFamilyMembers(child); // Recursively count children
    }
  }
  return count;
}

let totalFamilyMembers = countFamilyMembers(familyTree);
console.log("Total family members:", totalFamilyMembers);
