const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/', authMiddleware.isAuthenticated, usersController.list);
router.get('/create', usersController.create);
router.post('/create', usersController.doCreate);
router.post('/:id/delete', 
  authMiddleware.isAuthenticated, 
  authMiddleware.checkRole('ADMIN'), 
  usersController.doDelete);

module.exports = router;
