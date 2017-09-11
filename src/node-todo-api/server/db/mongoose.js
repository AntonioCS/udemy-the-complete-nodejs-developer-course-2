var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongodb:27017/TodoApp');
//http://mongoosejs.com/docs/connections.html#use-mongo-client
//mongoose.createConnection('mongodb://mongodb:27017/TodoApp');

module.exports = {
    mongoose
};