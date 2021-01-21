const express = require('express');

const shopController = require('../controllers/shop');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/favicon.ico', (req, res) => res.status(204));

// / => GET
router.get('/', shopController.getIndex);

// /products => GET
router.get('/products', shopController.getProducts);

// /products/12345 => GET
router.get('/products/:productId', shopController.getProduct);

// /cart => GET
router.get('/cart', isAuth, shopController.getCart);

// /cart => POST
router.post('/cart', isAuth, shopController.postCart);

// /cart-delete-item => POST
router.post('/cart-delete-item', isAuth, shopController.postCartDeleteProduct);

// /create-order
router.post('/create-order', isAuth, shopController.postOrder);

// /orders => GET
router.get('/orders', isAuth, shopController.getOrders);

router.get('/orders/:orderId', isAuth, shopController.getInvoice);

module.exports = router;
