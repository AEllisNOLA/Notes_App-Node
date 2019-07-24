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
    // for each already existing note, if that note title is the same as the given title of the new note, throw it in duplicateNotes array
  const duplicateNotes = notes.filter(note => note.title === title);
  // then if the duplicateNotes array is empty, there is no duplication of title, so feel free to push the notes into the notes batch
  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("Note added."));
  } else {
    console.log(
      chalk.red.inverse(
        "Title already exists. Please use a unique title for your note."
      )
    );
  }
};

const removeNote = title => {
  const notes = loadNotes();
  // filter through all notes. Return all notes that do not equal the title given
  const notesToKeep = notes.filter(note => note.title !== title);
  saveNotes(notesToKeep);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed"));
  } else {
    console.log(chalk.red.inverse("Note title not found. No note removed."));
  }
};

module.exports = {
  addNote,
  removeNote
};
