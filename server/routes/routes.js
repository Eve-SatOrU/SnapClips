
const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const downloaderController = require('../controllers/downloaderController');

router.get('/',controller.getindex);
router.get('/register', controller.getRegister);
router.post('/register' , controller.postRegister);
router.get('/login', controller.getLogin);
router.post('/login', controller.postLogin);
router.post('/logout', controller.postLogout);
router.get('/contact', controller.getContact);
router.get('/about', controller.getAbout);
//profile
router.get('/profile/:id', controller.getprofile);
// vid
router.get('/tiktok-download', downloaderController.getVedios);
router.post('/tiktok-download', downloaderController.postVideos);
// img
router.get('/image-download', controller.getImg);
// history
router.get('/history', controller.getHistory);
module.exports = router;