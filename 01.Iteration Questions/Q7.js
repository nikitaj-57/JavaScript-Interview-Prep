// Object Property Modification: Write a program
// that takes an object representing a user
// profile with username, email, and age properties.
// Modify the object to add a new property called
// isActive and set it to true.

function addActive(userProfile) {
  userProfile.isActive = true;
  return userProfile;
}

let userProfile = {
  userName: "testUser01",
  email: "testUser@gmail.com",
  age: 18,
};

userProfile = addActive(userProfile);

// userProfile["isActive"] = true

console.log(userProfile);

// {
//     userName: 'testUser01',
//     email: 'testUser@gmail.com',
//     age: 18,
//     isActive: true
//   }
