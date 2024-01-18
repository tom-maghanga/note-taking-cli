const note = process.argv[2];

const newNote = {
    "content" : note,
    "Date" : Date.now()
};

console.log(newNote);

