const { Router } = require('express');
const usersRouter = Router();
const usersController = require('../controllers/usersController');
const { isAdmin } = require('../middleware/isAdmin');

usersRouter.get('/', isAdmin, usersController.getUsers);
usersRouter.get('/:id/delete', isAdmin, usersController.getDeleteUser);
usersRouter.post('/:id/delete', isAdmin, usersController.postDeleteUser);

module.exports = usersRouter;
