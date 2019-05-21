const mongoose = require('mongoose');
var Promise = require('promise');

mongoose.set('debug', true);
mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost/twichat", {
    keepAlive: true,
    useNewUrlParser: true
});

module.exports.User = require('./user');