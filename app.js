const yargs = require("yargs");
const notes = require("./notes.js");

yargs.version("1.1.0");

// ADD NOTE
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// REMOVE NOTE
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

// LIST NOTES
yargs.command({
  command: "list",
  describe: "List all notes",
  handler() {
    notes.listNotes();
  }
});

yargs.parse();
