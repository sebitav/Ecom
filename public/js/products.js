const socket = io();

document.getElementById('addProduct').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;

})