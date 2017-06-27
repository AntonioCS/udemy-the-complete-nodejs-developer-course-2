console.log('Starting notes.js');

const fs = require('fs');
const data_file = 'notes-data.json';
var notes = [];

function readNotesFromFile() {
	/*
	if (fs.existsSync(data_file)) {
		notes = JSON.parse(fs.readFileSync(data_file));
	}
*/
	//OR

	try {
		notes = JSON.parse(fs.readFileSync(data_file));
	}catch (e) {

	}
}


function saveNotes() {
	fs.writeFileSync(
		data_file, 
		JSON.stringify(notes)
	);
}

var addNote = (title, body) => {
	//Only insert if the filter function does not find one that matches
	if (notes.filter((note) => note.title === title).length === 0) {
		var note = {title,body};
		notes.push(note);

		saveNotes();

		return note;
	}	
};

var getAll = () => {
	return notes;
};

var getNote = (title) => {
	return notes.filter((note) => note.title === title);
};

var removeNote = (title) => {
	notes = notes.filter((note) => note.title !== title);
	saveNotes();
};

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
};

readNotesFromFile();