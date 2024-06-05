const express = require('express');
const mongoose = require('mongoose')
const path = require('path');
const cookieParser = require('cookie-parser');
const auth = require('./middlewares/auth');
require('dotenv').config();

//routers
const UserRouter = require('./routers/UserRouter');

// database connection
mongoose.connect(process.env.DB_URI)
.then(() => {
    console.log('Successfully connected to the database !');
})
.catch(() => {
    console.error("Failled to connect to the database !");
})

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use('/public', express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use(cookieParser());


// login and signup pages
app.get('/login', (req, res) => {
    res.render('login.ejs');
});
app.get('/signup', (req, res) => {
    res.render('signup.ejs');
});

app.use('/', UserRouter);

app.get('/', auth, (req, res) => {
    const acctype = req.auth.acctype;
    if (acctype === "chercheurEmploi") {
        res.render("utilisateur.ejs");
    } else if (acctype === "recruteur") {
        res.render("recruteur.ejs")
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
