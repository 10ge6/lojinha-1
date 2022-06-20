const express = require('express');
const router = express.Router();
const service = require('./service');

// CRUD endpoints

// Storefront
router.post('/', service.createItem);

router.get('/', service.readStorefront);
router.get('/:product_id', service.readItem);

router.patch('/:product_id', service.updateItem);

router.delete('/:product_id', service.deleteItem);


module.exports = router;
