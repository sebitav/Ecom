// index.js

const express = require('express');
const session = require('express-session');
const app = express();

// Configuración de express y sesiones
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'mi-secreto',
  resave: false,
  saveUninitialized: false
}));

// Ruta de inicio
app.get('/', (req, res) => {
  res.render('index.ejs');
});

// Ruta de registro
app.post('/register', (req, res) => {
  // Lógica de registro de usuario

  // Redirigir a la vista de productos después del registro exitoso
  res.redirect('/productos');
});

// Ruta de inicio de sesión
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Lógica de validación de credenciales

  // Lógica de inicio de sesión exitoso
  if (email === 'adminCoder@coder.com' && password === 'adminCod3r123') {
    req.session.role = 'admin';
  } else {
    req.session.role = 'usuario';
  }

  // Redirigir a la vista de productos después del inicio de sesión exitoso
  res.redirect('/productos');
});

// Ruta de productos
app.get('/productos', (req, res) => {
  const usuario = {
    nombre: 'Juan' // Aquí deberías obtener el nombre del usuario desde tu lógica de autenticación
  };

  res.render('productos.ejs', { usuario });
});

// Ruta de administrador protegida
app.get('/admin', (req, res) => {
  if (req.session.role === 'admin') {
    // Lógica para la vista de administrador
    res.render('admin.ejs');
  } else {
    // Redirigir a una página de error o mostrar un mensaje de falta de autorización
    res.redirect('/productos');
  }
});

// Ruta de logout
app.post('/logout', (req, res) => {
  // Lógica de destrucción de la sesión

  // Redirigir a la vista de inicio de sesión después de hacer logout
  res.redirect('/login');
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
