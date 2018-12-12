/*
var obj = {
    name: 'Leonardo'
};
var stringObj = JSON.stringify(obj)
console.log(typeof stringObj)
console.log(stringObj)
*/
/*
var personString = '{"name": "Leonardo", "age": 21}';
var person = JSON.parse(personString);

console.log(typeof person);
console.log(person);
*/

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body' //onde told me the world is gonna roll me, i aint sharpest tool the shed, she was looking kinda dumb
};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(originalNoteString)

console.log(typeof note);
console.log(note.title);

