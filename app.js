const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const viewsRoutes = require('./routes/views');

// Configuración de handlebars
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
  })
);
app.set('view engine', 'hbs');
app.set('views', './views');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conexión a MongoDB
mongoose
  .connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
  })
  .catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
  });

// Rutas
app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);
app.use('/', viewsRoutes);

// Archivos estáticos
app.use(express.static('public'));

// Manejador de eventos para websockets
io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado');

  // Envío de lista de productos al cliente
  // Aquí deberías actualizar para utilizar la lógica correspondiente con MongoDB

  // Envío de lista de mensajes al cliente
  socket.emit('messages', chatMessages);

  // Escucho los mensajes enviado por el cliente y se los propago a todos
  socket.on('new-message', (data) => {
    chatMessages.push(data);
    io.sockets.emit('messages', chatMessages);
  });
});

// Inicialización del servidor
const PORT = 8080;

const server = http.listen(PORT, () => {
  console.log(`servidor escuchando en http://localhost:${PORT}`);
});
