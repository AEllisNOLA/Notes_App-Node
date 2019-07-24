# Notes_App-Node

## Add Note
To add note: ```node app.js add --title="This is the title of my note" --body="This is the body of my note"```

Title and Body are required. If title already exists, note will not be added and an error message will occur.

## Remove Note
To remove a note: ```node app.js remove --title="This is the title of my note"```

Title is required. If title is not found on your notes batch, nothing will be removed and an error message will occur.