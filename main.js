var mongoose = require ('mongoose');
var schema = require ('./schema');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

var User = mongoose.model('User2', schema, 'user2');

var user = new User({
    name: 'Jonh Smith',
    email: 'john@smith.io'
});

user.save((error) => {
    if (error) {
        console.log(error);
    }
    console.log("Saved!!");
});