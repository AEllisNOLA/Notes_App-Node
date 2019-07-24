# Notes_App-Node

## Add Note
To add note: ```node app.js add --title="This is the title of my note" --body="This is the body of my note"```

Title and Body are required. If title already exists, note will not be added and an error message will occur.

## Remove Note
To remove a note: ```node app.js remove --title="This is the title of my note"```

Title is required. If title is not found on your notes batch, nothing will be removed and an error message will occur.

## List Notes
To list all notes by title: ```node app.js list```

If there are no notes, an error message will appear. Otherwise, the title of all notes will be listed.

## Read Note
To read a note: ```node app.js read --title="This is the title of my note" ```

If the note exists, it will show the title and body. If note is not found, an error message will occur.