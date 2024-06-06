const Offer = require('../models/OfferModel');


exports.index = (req, res) => {
    const acctype = req.auth.acctype;
    if (acctype === "chercheurEmploi") {
        Offer.find()
        .then(offers => {
            res.render("utilisateur.ejs", {offers: offers});
        })
        .catch();
    } else if (acctype === "recruteur") {
        Offer.find({owner: req.auth.id})
        .then(offers => {
            res.render("recruteur.ejs", {offers: offers});
        });
    }
};

exports.create = (req, res) => {
    const acctype = req.auth.acctype;
    if (acctype === "recruteur") {
        if (req.method == "GET") {
            res.render('creer_offre.ejs')
        } else if (req.method == "POST") {
            const offer = new Offer({
                owner: req.auth.id,
                ...req.body,
                company: "Random Company"
            })
            offer.save()
            .then(offer => {
                res.send(offer);
            })
            .catch(error => {
                res.send(error);
            })
        }
    } else {

    }
}