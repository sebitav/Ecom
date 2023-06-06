const products = require('../data/products');
const { writeDataToFile } = require('../utils');

function getProduct(req, res) {
  const { id } = req.params;
  const product = products.find((prod) => prod.id === +id);

  if (!product) {
    res.statusCode = 404;
    return res.send(`Product with id ${id} not found`);
  }

  res.send(product);
}

function getProducts(req, res) {
  res.send(products);
}

function createProduct(req, res) {
  const { name, description, price } = req.body;
  const newProduct = {
    id: products.length + 1,
    name,
    description,
    price,
  };
  products.push(newProduct);
  writeDataToFile('./data/products.json', products);
  res.status(201).send(newProduct);
}

function updateProduct(req, res) {
  const { id } = req.params;
  const { name, description, price } = req.body;
  const index = products.findIndex((prod) => prod.id === +id);

  if (index === -1) {
    res.statusCode = 404;
    return res.send(`Product with id ${id} not found`);
  }

  products[index] = { id: +id, name, description, price };
  writeDataToFile('./data/products.json', products);
  res.send(products[index]);
}

function deleteProduct(req, res) {
  const { id } = req.params;
  const index = products.findIndex((prod) => prod.id === +id);

  if (index === -1) {
    res.statusCode = 404;
    return res.send(`Product with id ${id} not found`);
  }

  const deletedProduct = products.splice(index, 1);
  writeDataToFile('./data/products.json', products);
  res.send(deletedProduct[0]);
}

module.exports = {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
