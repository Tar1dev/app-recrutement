const express = require('express');
const OfferController = require('../controllers/OfferController');
const auth = require('../middlewares/auth');


const router = express.Router();

router.get('/', auth, OfferController.index);
router.get('/creer_offre', auth, OfferController.create);
router.post('/creer_offre', auth, OfferController.create);

module.exports = router;