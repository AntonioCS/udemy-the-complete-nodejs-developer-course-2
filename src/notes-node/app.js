console.log('Starting App');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var cmd = process.argv[2];
console.log('Command: ' + cmd);
//console.log(process.argv);
console.log('Yargs', argv);

switch (cmd) {
	case 'add':
		var res = notes.addNote(argv.title, argv.body);
		if (res) { //will be equal to undefined if note note created
			console.log('Note created');
			console.log('---');
			console.log('Title: '+ res.title);
			console.log('Body: '+ res.body);
		}
		else {
			console.log('Node already existed');
		}
	break;
	case 'list':
		console.log(notes.getAll());
	break;
	case 'read':
		console.log(notes.getNote(argv.title));
	break;	
	case 'remove':
		notes.removeNote(argv.title);
	break;	
	default:
		console.log('Command not recognized');		
}