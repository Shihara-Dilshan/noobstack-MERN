const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true,
        min: 4
    },
    lname: {
        type: String,
        required: true,
        min: 4
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6,
    }, 
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 8
    },
    imageUrl: {
    	type: String,
        required: true,
        default: "https://www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg",
        max: 1024,
        min: 8
    }
});

module.exports = mongoose.model('Users', UserSchema);
