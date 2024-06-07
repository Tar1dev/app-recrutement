const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: {type: String, unique:true, required:true},
    password: {type: String, unique:false, required:true},
    acctype: {type: String, unique:false, required:true}
});

module.exports = mongoose.model('User', UserSchema);