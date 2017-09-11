//const MongoClient = require('mongodb').MongoClient;
//es6 object destructuring
const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID();
//console.log(obj);

MongoClient.connect('mongodb://mongodb:27017/TodoApp', (err, db) => {
    if (err) {
        console.log(err);
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');
    /*
        db.collection('Todos').insertOne({
            text: 'Something to do',
            completed: false
        }, (err, result) => {
            if (err) {
                return console.log('Unable to insert todo', err);
            }
    
            console.log(result.ops);
                //JSON.stringify(result, undefined, 2));
        });*/
/*
    db.collection('Users').insertOne({
        name: 'Ze Manel',
        age: 25,
        location: 'Menorca'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }

        console.log(result.ops[0]._id.getTimestamp());
     
    });*/

    db.close();
});