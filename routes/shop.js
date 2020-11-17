const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/favicon.ico', (req, res) => res.status(204));

router.get('/', productsController.getProducts);

module.exports = router;
