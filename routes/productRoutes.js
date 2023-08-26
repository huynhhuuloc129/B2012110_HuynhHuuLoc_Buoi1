const express = require('express');
const productController = require('../controller/productController');

const router = express.Router();

router
  .route('/')
  .get(productController.getAll)
  .post(productController.createAccount);
router
  .route('/:id')
  .get(productController.getOneCustomer)
  .patch(productController.updateCustomer)
  .delete(productController.deleteCustomer);

module.exports = router;