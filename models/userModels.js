const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'usuario'],
    default: 'usuario',
  },
});

// Método para hashear la contraseña antes de guardarla en la base de datos
userSchema.pre('save', async function (next) {
  const user = this;

  // Verificar si la contraseña ha sido modificada o es nueva
  if (!user.isModified('password')) {
    return next();
  }

  try {
    // Generar el salt
    const salt = await bcrypt.genSalt(10);

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(user.password, salt);

    // Reemplazar la contraseña original con la contraseña hasheada
    user.password = hashedPassword;

    return next();
  } catch (error) {
    return next(error);
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
