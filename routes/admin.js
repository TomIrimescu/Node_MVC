const express = require('express');

const router = express.Router();

const products = [];

router.get('/favicon.ico', (req, res) => res.status(204));

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product', { 
    pageTitle: 'Add Product',
    path: '/add-product'
  })
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
