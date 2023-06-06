const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const passport = require('passport');

// Ruta para el registro de usuarios
router.post('/register', authController.register);

// Ruta para el inicio de sesión utilizando Passport
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}));

// Ruta para el logout
router.get('/logout', authController.logout);

// Ruta para la autenticación de GitHub
router.get('/auth/github', passport.authenticate('github'));

router.get(
  '/auth/github/callback',
  passport.authenticate('github', {
    successRedirect: '/',
    failureRedirect: '/login'
  })
);

module.exports = router;
