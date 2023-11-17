
const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const downloaderController = require('../controllers/downloaderController');
const audioController = require('../controllers/audioController');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/',controller.getindex);
router.get('/register', controller.getRegister);
router.post('/register' , controller.postRegister);
router.get('/login', controller.getLogin);
router.post('/login', controller.postLogin);
router.get('/logout', controller.postLogout);
router.get('/contact', controller.getContact);
router.get('/about', controller.getAbout);
//profile
router.get('/profile/:id', controller.getprofile);
// img
// router.get('/upload', controller.getimgdump);
// router.post('/upload', controller.postimgdump);
// vid
router.get('/tiktok-download', downloaderController.getVedios);
router.post('/tiktok-download', downloaderController.postVideos);
// img
router.get('/image-download', controller.getImg);
// history
router.get('/history', controller.getHistory);



// audio
// audio
router.get('/audio', audioController.getAudio);
// router.post('/upload', upload.single('audioFile'), audioController.postAudio);
module.exports = router;