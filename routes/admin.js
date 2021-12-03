const path = require('path');
const express = require("express");

const adminController = require('../controllers/admin')
const router = express.Router();


//   /admin/produtcs => GET
router.get("/add-product", adminController.getAddProduct )
            // when admin reaches this route then go ahead and execute this productsController.getAddproduct
router.get('/products', adminController.getProducts);

//  /admin/products => post
router.post('/add-product', adminController.postAddProduct )
            // when admin reaches this route then go ahead and execute this productsController.postAddproduct


module.exports = router;            
// exports.routes = router;
// exports.products = products;

// module = file so export this file