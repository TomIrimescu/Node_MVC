const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/favicon.ico', (req, res) => res.status(204));

router.get('/', productsController.getShop);

router.get('/products', productsController.getProducts);

router.get('/cart', productsController.getCart);

module.exports = router;
