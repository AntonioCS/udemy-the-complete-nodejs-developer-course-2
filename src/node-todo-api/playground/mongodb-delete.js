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

    var usersCollection = db.collection('Users');

    usersCollection.deleteMany({
        'name': 'Ze Manel'
    }).then((result) => { console.log(result)});

    usersCollection.findOneAndDelete({
        _id: new ObjectID('596fd1626df07e003d536d8f')
    }).then((result) => { console.log(result)});


    //deleteMany

    // db.collection('Todos').deleteMany(
    //     {text: 'Lunch'}
    // ).then((result) => { console.log(result)});

    

    //deleteOne
    // db.collection('Todos').deleteOne(
    //     {text: 'Lunch'}
    // ).then((result) => { console.log(result)});

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete(
    //     {completed: false}
    // ).then((result) => { console.log(result)});




    db.close();

});