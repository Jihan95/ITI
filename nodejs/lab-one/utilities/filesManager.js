const fs = require("fs").promises;

async function readJSON(filePath) {
  try {
    const content = await fs.readFile(filePath, "utf-8");
    if (!content.trim()) {
      return [];
    }
    return JSON.parse(content);
  } catch (err) {
    console.error(err);
    return [];
  }
}

async function writeJSON(filePath, content) {
  try {
    await fs.writeFile(filePath, JSON.stringify(content), "utf-8");
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  readJSON,
  writeJSON,
};

// (async () => {
//   const books = await readJSON("./data/books.json");
//   console.log("Books:", books);

//   books.push({ id: "5", bookTitle: "book5" });
//   await writeJSON("./data/books.json", books);
// })();
