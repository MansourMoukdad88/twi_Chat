const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost/twi_chat", {
    keepAlive: true,
    useMongoClient: true
});