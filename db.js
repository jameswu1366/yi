const mongoose = require('mongoose');
module.exports = function(){
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/vidly',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to MongoDB...'));
}