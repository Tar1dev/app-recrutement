const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const User = require('../models/UserModel');

exports.login = (req, res) => {
    User.findOne({email : req.body.email})
    .then(user => {
        if (user) {
            bcrypt.compare(req.body.password, user.password)
            .then(success => {
                if (success) {
                    token = jwt.sign(
                        {id: user._id, acctype: user.acctype},
                        process.env.JWT_SECRET,
                        {expiresIn: '24h'}
                    );
                    res.cookie('token', token, {httpOnly: true});
                    res.redirect('/');
                } else {
                    res.render("login.ejs", {error : "Wrong username or password !"});
                }
            })
            .catch(() => {
                res.render("login.ejs", {error: "Internal server error !"})
            })
        } else {
            res.render("login.ejs", {error : "Wrong username or password !"});
        }
    })
    .catch(() => {
        
    })
};

exports.signup = (req, res) => {
    User.findOne({email : req.body.email})
    .then(user => {
        if (!user) {
            bcrypt.hash(req.body.password, 10)
            .then(hash => {
                const user = new User({
                    email: req.body.email,
                    password: hash,
                    acctype: req.body.acctype
                });
                user.save()
                .then(user => {
                    res.redirect('/login');
                })
            })
            .catch(error => {
                res.send("Error while hashing pwd !");
            })
        } else {
            res.render("signup.ejs", {error: "Email already used !"});
        }
    })
};