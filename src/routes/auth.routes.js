// registro
// login

const {Router} = require('express');
const {register, login}  = require('../controllers/auth.controller');
const router = Router();

// router.METHOD // GET, POST PUT, DELETE

router.post('/register', register);
router.post('/login', login);

module.exports = router; // ahorita lo usamos en app
