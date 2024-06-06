const jwt = require('jsonwebtoken');
require('dotenv').config();
 
module.exports = (req, res, next) => {
    try {
        const token = req.cookies.token;
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const id = decodedToken.id;
        const acctype = decodedToken.acctype;
        req.auth = {
            id: id,
            acctype: acctype 
        };
        next();
    } catch(error) {
        res.send("401 - Unothorized");
    }
};