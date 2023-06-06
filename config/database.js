const { MongoClient } = require('mongodb');

// Configura la URL y el nombre de la base de datos de MongoDB
const url = 'mongodb://localhost:27017'; // Cambia la URL si es necesario
const dbName = 'tu-base-de-datos'; // Cambia el nombre de la base de datos si es necesario

// Función para conectar a la base de datos
async function connect() {
  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    // Conecta al servidor de MongoDB
    await client.connect();
    console.log('Conexión exitosa a MongoDB');

    // Selecciona la base de datos
    const db = client.db(dbName);
    return db;
  } catch (error) {
    console.error('Error al conectar a MongoDB', error);
    throw error;
  }
}

module.exports = connect;
