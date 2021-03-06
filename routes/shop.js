const path = require('path');
const express = require('express');
const router = express.Router();

const shopController = require("../controllers/shop")

// router object
router.get('/', shopController.getIndex);

        // at "/" , bring shopController.getProducts function

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/checkout', shopController.getCheckout);

router.get('/orders', shopController.getOrders)

module.exports = router;