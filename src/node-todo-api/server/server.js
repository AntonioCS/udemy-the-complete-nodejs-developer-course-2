var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/todo');

const port = 3000;
var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    
    todo.save().then(
        (doc) => {
            res.send(doc);
        },
        (e) => {
            res.status(400).send(e);
        }
    ).catch((e) => {
        console.log(e);
    });

});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {app};