const express = require('express');
const router = express.Router();
const service = require('./service');

// CRUD endpoints

// Cart
router.post('/', service.createCartItem);

router.get('/', service.readCart);
router.get('/:product_id', service.readCartItem);

router.patch('/:product_id', service.updateCartItem);

router.delete('/:product_id', service.deleteCartItem);


module.exports = router;
