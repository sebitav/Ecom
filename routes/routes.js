const express = require('express');
const router = express.Router();

// Importar los controladores correspondientes
const cartController = require('./controllers/cartController');
const productsController = require('./controllers/productsController');

// Rutas para el carrito de compras
router.get('/cart', cartController.getCart);
router.post('/cart', cartController.addToCart);
router.put('/cart/:productId', cartController.updateCartItem);
router.delete('/cart/:productId', cartController.deleteCartItem);

// Rutas para productos
router.get('/products', productsController.getProducts);
router.get('/products/:id', productsController.getProduct);

// Exportar el router para su uso en app.js
module.exports = router;
