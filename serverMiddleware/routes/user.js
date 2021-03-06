const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
// verification que le mail a un format valide
const emailValid = require('../middleware/emailValide');
// verification que le password a un format valide
const passValid = require('../middleware/passValide');
// middleware pour proteger la route
const authent = require('../middleware/auth');
const formValid = require('../middleware/formValidation');


// Route création de compte
router.post('/signup',formValid.mailValide, formValid.passValide, userCtrl.signup);
// Route login 
router.post('/login',formValid.mailValide, formValid.passValide, userCtrl.login);
// Route user pour middleware auth
router.get('/user', authent, userCtrl.user);
// Route delete User
router.delete('/user/:id', authent, userCtrl.deleteUser);
// Route user recupère ses données
router.get('/myuser', authent, userCtrl.myUser);


module.exports = router;