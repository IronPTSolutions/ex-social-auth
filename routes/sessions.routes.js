const passport = require('passport');
const express = require('express');
const router = express.Router();
const sessionsController = require('../controllers/sessions.controller');

router.get('/create', sessionsController.create);
router.post('/create', sessionsController.doCreate);
router.get('/delete', sessionsController.delete);

router.post('/google', passport.authenticate('google-auth', { scope: ['openid', 'profile', 'email'] }));
router.post('/facebook', passport.authenticate('facebook-auth', { scope: ['email'] }));
router.get('/:provider/cb', sessionsController.createWithIDPCallback);

module.exports = router;
