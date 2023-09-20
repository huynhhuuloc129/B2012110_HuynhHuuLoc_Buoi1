const express = require('express');
const customerController = require('../controller/customerController');

const router = express.Router();

router
  .route('/')
  .get(customerController.getAllCustomers)
  .post(customerController.createAccount);
router
  .route('/:id')
  .get(customerController.getOneCustomer)
  .patch(customerController.updateCustomer)
  .delete(customerController.deleteCustomer);

module.exports = router;