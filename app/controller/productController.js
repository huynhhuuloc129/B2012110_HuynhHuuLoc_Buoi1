const product  = require('./../models/product');

exports.getAllProducts = async (req, res) => {
    res.status(204).json({
        status: 'success',
        message: 'Delete successful!',
      })
};

exports.getOneProduct = async (req, res) => {
    res.status(204).json({
        status: 'success',
        message: 'Delete successful!',
      })
};

exports.createProduct = async (req, res) => {
    res.status(204).json({
        status: 'success',
        message: 'Delete successful!',
      })
};

exports.updateProduct = (req, res) => {
    res.status(204).json({
        status: 'success',
        message: 'Delete successful!',
      })
};

exports.deleteProduct = async (req, res) => {

    res.status(204).json({
      status: 'success',
      message: 'Delete successful!',
    })
};