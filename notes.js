const fs = require("fs");
const chalk = require("chalk");

// HELPER FUNCTIONS
const loadNotes = () => {
  try {
    // read from file
    const dataBuffer = fs.readFileSync("notes.json");
    // convert to string
    const dataJSON = dataBuffer.toString();
    // parse string into JSON
    return JSON.parse(dataJSON);
  } catch (e) {
    // else return an empty array
    return [];
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

// APP FUNCTIONS

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title
  )
  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("Note added."));
  } else {
    console.log(chalk.red.inverse("Title already exists. Please use a unique title for your note."))
  }
};

module.exports = {
  addNote
};
