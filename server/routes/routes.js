
const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
// router.get('/',controller.getindex);
router.post('/register' , controller.postRegister);
router.post('/login', controller.postLogin);
router.post('/logout', controller.postLogout);
//profile
router.get('/profile/:id', controller.getprofile);
module.exports = router;