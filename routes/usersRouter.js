const { Router } = require('express');
const usersRouter = Router();
const usersController = require('../controllers/usersController');

usersRouter.get('/', usersController.getUsers);
usersRouter.get('/:id/delete', usersController.getDeleteUser);
usersRouter.post('/:id/delete', usersController.postDeleteUser);

module.exports = usersRouter;
