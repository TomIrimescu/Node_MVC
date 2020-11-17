const adminData = require('./admin');

const express = require('express');

const router = express.Router();

router.get('/favicon.ico', (req, res) => res.status(204));

router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', { 
    prods: products, 
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true  
  });
});

module.exports = router;
