/*
var obj = {
    name: 'Acs'
}

var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(typeof stringObj);

var personString = '{"name": "Acs", "age":33}';
console.log(typeof JSON.parse(personString));
console.log(JSON.parse(personString));
*/

const fs = require('fs');

var originalNode = {
    title: 'title',
    body: 'body'
};

fs.writeFileSync('notes.json', JSON.stringify(originalNode));

var noteFromFile = JSON.parse(fs.readFileSync('notes.json'));

console.log(typeof noteFromFile);
console.log(noteFromFile);