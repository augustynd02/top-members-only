const { Router } = require('express');
const { isAdmin } = require('../middleware/isAdmin');

const usersController = require('../controllers/usersController');
const usersRouter = Router();

usersRouter.get('/', isAdmin, usersController.getUsers);

usersRouter.get('/:id/delete', isAdmin, usersController.getDeleteUser);
usersRouter.post('/:id/delete', isAdmin, usersController.postDeleteUser);

module.exports = usersRouter;
