const express = require('express');
const { body } = require('express-validator');

const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', isAuth, adminController.getAddProduct);

// /admin/products => GET
router.get('/products', isAuth, adminController.getProducts);

// /admin/add-product => POST
router.post(
  '/add-product',
  [
    body('title',
      'Please enter a title.')
      .isString()
      .isLength({ min: 3 })
      .trim(),
    // .withMessage('Please enter a title.'),
    body('price',
      'Please enter a price.')
      .isFloat(),
    // .withMessage('Please enter a price.'),
    body('description',
      'Please enter a description.')
      .isLength({ min: 5, max: 400 })
      // .withMessage('Please enter a description.')
      .trim()
  ],
  isAuth,
  adminController.postAddProduct
);

// /admin/edit-product => GET
router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

// /admin/edit-product => POST
router.post(
  '/edit-product',
  [
    body('title',
      'Please enter a title.')
      .isString()
      .isLength({ min: 3 })
      .trim(),
    // .withMessage('Please enter a title.'),
    body('price',
      'Please enter a price.')
      .isFloat(),
    // .withMessage('Please enter a price.'),
    body('description',
      'Please enter a description.')
      .isLength({ min: 5, max: 400 })
      // .withMessage('Please enter a description.')
      .trim()
  ],
  isAuth,
  adminController.postEditProduct
);

// /admin/product/:productId => DELETE
router.delete('/product/:productId', isAuth, adminController.deleteProduct);

module.exports = router;