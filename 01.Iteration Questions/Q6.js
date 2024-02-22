// Nested Object Search: Create a program that takes a
// nested object representing a file system directory
// structure. Implement a function that recursively
// searches for a file by name and returns its full
// path if found.(see)

let fileSystem = {
  name: "root",
  type: "directory",
  children: [
    {
      name: "Documents",
      type: "directory",
      children: [
        { name: "report.docx", type: "file" },
        { name: "presentation.pptx", type: "file" },
      ],
    },
    {
      name: "Pictures",
      type: "directory",
      children: [
        { name: "vacation.jpg", type: "file" },
        { name: "family.jpg", type: "file" },
      ],
    },
    {
      name: "Videos",
      type: "directory",
      children: [
        { name: "movie.mp4", type: "file" },
        { name: "tutorial.mp4", type: "file" },
      ],
    },
  ],
};

function findFile(fileSystem, fileName, currentPath = "") {
  // Check if the current file or directory matches the fileName
  if (fileSystem.name === fileName && fileSystem.type === "file") {
    return currentPath + "/" + fileSystem.name;
  }

  // If it's a directory, recursively search its children
  if (fileSystem.type === "directory" && fileSystem.children) {
    for (let child of fileSystem.children) {
      let fullPath = findFile(
        child,
        fileName,
        currentPath + "/" + fileSystem.name
      );
      if (fullPath) {
        return fullPath;
      }
    }
  }

  // File not found
  return null;
}

let fileName = "tutorial.mp4";
let filePath = findFile(fileSystem, fileName);

if (filePath) {
  console.log(`File "${fileName}" found at path: ${filePath}`);
} else {
  console.log(`File "${fileName}" not found.`);
}
