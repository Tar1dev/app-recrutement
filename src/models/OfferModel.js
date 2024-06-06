const mongoose = require('mongoose');

const OfferSchema = mongoose.Schema({
    owner: {type: String, required: true},
    title: {type: String, required:true},
    company: {type: String, required:true},
    contract: {type: String, required:true},
    minSalary: {type: Number, required:true},
    maxSalary: {type: Number, required:true},
    city: {type: String, required:false},
    description: {type: String, required:true}
});

module.exports = mongoose.model("Offer", OfferSchema);