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
  // for each already existing note, search to see if the given title is already taken
  const duplicateNote = notes.find(note => note.title === title);

  // then if the duplicateNotes array is empty, there is no duplication of title, so feel free to push the notes into the notes batch
  if (!duplicateNote) {
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

const listNotes = () => {
  const notes = loadNotes();
  if (notes.length === 0) {
    console.log(chalk.red.inverse("You have no notes"));
  } else {
    console.log(chalk.blue.inverse("Your Notes:"));
    notes.forEach(note => console.log(chalk.yellow(`${note.title}`)));
  }
};

const readNote = title => {
  const notes = loadNotes();
  const foundNote = notes.find(note => note.title === title);
  if (foundNote) {
    console.log(chalk.blue.inverse(foundNote.title));
    console.log(chalk.yellow(foundNote.body));
  } else {
    console.log(chalk.red.inverse("Note not found."));
  }
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote
};
