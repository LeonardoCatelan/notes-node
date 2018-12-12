console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var argv = yargs.argv;
var command = argv._[0]
console.log('command: ', command);
//console.log('Process ', process.argv)
console.log('Yargs ', argv);

if(command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(!!note == true){
        console.log('Stored note');
        notes.logNote(note);
    }else{
        console.log('Title duplicated, note not stored');
    }
}else if (command === 'list'){
    notes.getAll();
}else if(command === 'read'){
    var note = notes.getNotes(argv.title);
    if(note){
        console.log('Note found');
        notes.logNote(note);
    }else{
        console.log('Note not found')
    }
}else if(command === 'remove'){
    var noteRemoved = notes.removeNotes(argv.title);
    var message = noteRemoved ? 'Node removed' : 'Node does not exist';
    console.log(message)
}else{
    console.log('Command not recognized');
}