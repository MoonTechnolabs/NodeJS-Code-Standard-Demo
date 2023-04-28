var express = require('express');
var router = express.Router();
var productController = require('../api/controller/productController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/addProduct', productController.addProduct);

router.post('/editProduct', productController.editProduct);

router.post('/deleteProduct', productController.deleteProduct);

router.get('/getProductList', productController.getProductList);


module.exports = router;
