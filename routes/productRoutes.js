const express = require('express');
const router = express.Router();
const connectDB = require('../config/db');

// Endpoint para obtener productos paginados
router.get('/products', async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Número de página (por defecto, 1)
  const pageSize = parseInt(req.query.pageSize) || 10; // Tamaño de página (por defecto, 10)

  try {
    const db = await connectDB();
    const productsCollection = db.collection('products');

    // Realiza la consulta a la base de datos con paginación
    const products = await productsCollection
      .find()
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .toArray();

    res.json(products);
  } catch (error) {
    console.error('Error al obtener productos', error);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

// Endpoint para crear un nuevo producto
router.post('/products', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el producto' });
  }
});

module.exports = router;
