const customer = require('./../models/customer');

exports.getAllCustomers = async (req, res) => {
    res.status(204).json({
        status: 'success',
        message: 'Delete successful!',
      })
};

exports.getOneCustomer = async (req, res) => {
    res.status(204).json({
        status: 'success',
        message: 'Delete successful!',
      })
};

exports.createAccount = async (req, res) => {
    res.status(204).json({
        status: 'success',
        message: 'Delete successful!',
      })
};

exports.updateCustomer = (req, res) => {
    res.status(204).json({
        status: 'success',
        message: 'Delete successful!',
      })
};

exports.deleteCustomer = async (req, res) => {

    res.status(204).json({
      status: 'success',
      message: 'Delete successful!',
    })
};