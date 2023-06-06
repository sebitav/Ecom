let products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is product 1',
    price: 100,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is product 2',
    price: 200,
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'This is product 3',
    price: 300,
  },
];

function getAllProducts(req, res) {
  res.json(products);
}

function getProductById(req, res) {
  const product = products.find((p) => p.id === Number(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
}

function createProduct(req, res) {
  const { name, description, price } = req.body;
  const id = products.length + 1;
  const product = { id, name, description, price };
  products.push(product);
  res.status(201).json(product);
}

function updateProduct(req, res) {
  const product = products.find((p) => p.id === Number(req.params.id));
  if (product) {
    const { name, description, price } = req.body;
    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
}

function deleteProduct(req, res) {
  products = products.filter((p) => p.id !== Number(req.params.id));
  res.json({ message: 'Product removed' });
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
