const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const userCtrl = require('../controllers/userController');

router.post('/register', userCtrl.register);
router.post('/login', userCtrl.login);
router.get('/user/:id', auth, userCtrl.getUser);
router.put('/user/:id', auth, userCtrl.updateUser);
router.patch('/user/:id/status', auth, userCtrl.setStatus);
router.delete('/user/:id', auth, userCtrl.softDelete);

module.exports = router;
