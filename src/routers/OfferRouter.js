const express = require('express');
const OfferController = require('../controllers/OfferController');
const auth = require('../middlewares/auth');


const router = express.Router();

router.get('/', auth, OfferController.index);
router.get('/creer_offre', auth, OfferController.create);
router.post('/creer_offre', auth, OfferController.create);
router.get('/delete/:id', auth, OfferController.delete);
router.get('/update/:id', auth, OfferController.update);
router.post('/update/:id', auth, OfferController.update);

module.exports = router;