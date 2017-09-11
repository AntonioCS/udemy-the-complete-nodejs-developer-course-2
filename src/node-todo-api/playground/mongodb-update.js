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

    var todosCollection = db.collection('Todos');    

    // todosCollection.findOneAndUpdate(
    //     {
    //         _id: new ObjectID('59708c1fc6a1f6eb4730d59f')
    //     },
    //     {
    //         $set: {
    //             completed: true
    //         }
    //     },
    //     {
    //         returnOriginal: false
    //     }
    // ).then((result) => { console.log(result)});

    var usersCollection = db.collection('Users');
    usersCollection.findOneAndUpdate(
        {
            _id: new ObjectID('59707bc6e99bb3001afa8e56')
        },
        {
            $set: {
                name: 'Manel'
            },
            $inc: {
                age: 1
            }
        },
        {
            returnOriginal: false
        }
    ).then((result) => { console.log(result)});

    db.close();

});