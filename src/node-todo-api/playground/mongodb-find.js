//const MongoClient = require('mongodb').MongoClient;
//es6 object destructuring
const { MongoClient, ObjectID } = require('mongodb');

//var obj = new ObjectID();
//console.log(obj);

MongoClient.connect('mongodb://mongodb:27017/TodoApp', (err, db) => {
    if (err) {
        console.log(err);
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    //db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    // db.collection('Todos').find({
    //     _id: new ObjectID('59707daac6a1f6eb4730d449')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));

    // }, (err) => {
    //     console.log('Inable to fetch todos', err)
    // });

    // db.collection('Todos').find().count().then(
    //     (count) => {
    //         console.log(`Todos count: ${count}`);
    //     },
    //     (err) => {
    //         console.log('Unable to fetch todos', err)
    //     }
    // );

    db.collection('Users').find({name: 'Ze Manel'}).toArray().then(
        (docs) => {
            console.log(docs);
            //console.log(`Todos count: ${count}`);
        },
        (err) => {
            console.log('Unable to fetch todos', err)
        }
    );



    db.close();

});