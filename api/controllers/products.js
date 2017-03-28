'use strict';

const ProductModel = require('../../database').products;

const productController = {
  find : (req, res) => {
    ProductModel.find({name : req.query.name})
    .then(data => {
      res.send('Operation succeded ::: ' + data)
    })
    .catch(err => {
      res.send('Operation failed ::: ' + err)
    });
  }
}

module.exports = productController;
