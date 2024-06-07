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
                res.redirect('/');
            })
            .catch(error => {
                res.send(error);
            })
        }
    } else {

    }
}

exports.delete = (req, res) => {
    const acctype = req.auth.acctype;
    const userId = req.auth.id;
    const offerId = req.params.id;
    if (acctype == "recruteur") {
        Offer.deleteOne({_id: offerId, owner: userId})
        .then(() => {
            res.redirect('/');
        })
        .catch(() => {
            res.send("500 - Internal Server Error")
        })
    }
};


exports.update = (req, res) => {
    const acctype = req.auth.acctype;
    const userId = req.auth.id;
    const offerId = req.params.id;
    if (acctype == "recruteur") {
        if (req.method == "POST") {
            Offer.updateOne({ _id: offerId, owner:userId}, { ...req.body })
            .then(() => {
                res.redirect('/');
            })
            .catch(error => {
                res.send("An error occured" + error)
                console.log(error);
            });
        } else if (req.method == "GET") {
            Offer.findOne({_id: req.params.id})
            .then(offer => {
                res.render("update_offre.ejs", {offer: offer});
            })
        }
    } 
};