//use "nodemon -L -V server.js"" for reloads to work
const express = require('express');
const fs = require('fs');
//handlebars
const hbs = require('hbs');
const port = process.env.PORT || 3000;

var app = express();
var errorFunc = (err) => {
    if (err) {
        console.log('Something went wront: ', err);
    }
};

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.set('view_engine', 'hbs');

app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    fs.appendFile('server.log', log + '\n', errorFunc);
    console.log(log);
    next();
});

app.use((req, res, next) => {
    res.render('maintenance.hbs', {
        pageTitle: 'Maintenance Page!',
        welcome_msg: 'Welcome to this page!!!'
    })
});

app.use(express.static(__dirname + '/public'))

//app.get('/', (req, res) => {});
app.get('/', (req, res) => {
    var data = {
        pageTitle: 'Home!',
        welcome_msg: 'Welcome to this page!!!'
    };

    res.render('home.hbs', data);
});

app.get('/about', (req, res) => {
    //return res.send('About page');
    var data = {
        pageTitle: 'About page'
    };

    res.render('about.hbs', data);
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request'
    });
});
/*
app.get('/restart', (req, res) => {
    process.exit(1);
});
//*/


app.listen(port, () => {
    console.log('Server up on port: ' + port);
});