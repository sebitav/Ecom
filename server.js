const express = require('express');
const cors = require('cors');
const productsRouter = require('./routes/products');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/products', productsRouter);

app.listen(8080, () => {
  console.log('Server running on port 8080');
});

