console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
     var notes = fetchNotes();
     var note = {
         title,
         body
     };

     var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
        //console.log('Salvo com sucesso')
    }else{
        //console.log('Não adicionado, título dupicado;')
    }
 };

var getAll = () => {
    console.log('Getting all notes ');
};

var getNotes = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
};

var removeNotes = (title) => {
    var notes = fetchNotes(); //fetch notes
    var filteredNotes = notes.filter((note) => note.title !== title);//filter notes
    saveNotes(filteredNotes);    //save new notes array

    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    console.log('---');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};  

module.exports = {
    addNote, //Isso = addNote: addNote()    
    getAll,
    getNotes,
    removeNotes,
    logNote
}
/* 
    console.log(module);
    module.exports.age = 21;
*/


/* module.exports.addNote = () => {
    console.log('addNote')  
    return 'New node';
};
 */

/* module.exports.soma = (a, b) => {
    console.log(a+b)
}
 */

 