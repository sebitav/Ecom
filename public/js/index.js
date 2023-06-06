const getAllProducts = async () => {
    const response = await fetch('/products');
    const products = await response.json();
  
    const productsList = document.getElementById('productsList');
    productsList.innerHTML = '';
  
    products.forEach((product) => {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(`${product.id}: ${product.name} - $${product.price}`));
      productsList.appendChild(li);
    });
  };
  
  const getProductById = async () => {
    const productId = document.getElementById('productIdInput').value;
    const response = await fetch(`/products/${productId}`);
  
    if (response.status === 404) {
      alert('Product not found!');
      return;
    }
  
    const product = await response.json();
  
    const productsList = document.getElementById('productsList');
    productsList.innerHTML = '';
  
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${product.id}: ${product.name} - $${product.price}`));
    productsList.appendChild(li);
  };
  
  const createProduct = async () => {
    const name = document.getElementById('productNameInput').value;
    const price = document.getElementById('productPriceInput').value;
  
    const response = await fetch('/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, price }),
    });
  
    if (response.status === 201) {
      alert('Product created successfully!');
    } else {
      alert('Error creating product!');
    }
  };
  
  const updateProduct = async () => {
    const id = document.getElementById('productIdUpdateInput').value;
    const name = document.getElementById('productNameUpdateInput').value;
    const price = document.getElementById('productPriceUpdateInput').value;
  
    const response = await fetch(`/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, price }),
    });
  
    if (response.status === 200) {
      alert('Product updated successfully!');
    } else {
      alert('Error updating product!');
    }
  };
  
  const deleteProduct = async () => {
    const id = document.getElementById('productIdDeleteInput').value;
  
    const response = await fetch(`/products/${id}`, {
      method: 'DELETE',
    });
  
    if (response.status === 200) {
      alert('Product deleted successfully!');
    } else {
      alert('Error deleting product!');
    }
  };
  