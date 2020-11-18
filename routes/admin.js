const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/favicon.ico', (req, res) => res.status(204));

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/products', adminController.getProducts);

module.exports = router;