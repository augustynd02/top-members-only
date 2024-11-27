const { Router } = require('express');
const messagesRouter = Router();
const messagesController = require('../controllers/messagesController');
const { isAuth } = require('../middleware/isAuth');
const { isAdmin } = require('../middleware/isAdmin');

messagesRouter.get('/', isAuth, messagesController.getMessages);
messagesRouter.get('/new', isAuth, messagesController.getNewMessage);
messagesRouter.post('/new', isAuth, messagesController.postNewMessage);

messagesRouter.get('/:id/edit', isAdmin, messagesController.getEditMessage);
messagesRouter.post('/:id/new', isAdmin, messagesController.postEditMessage);
messagesRouter.get('/:id/delete', isAdmin, messagesController.getDeleteMessage);
messagesRouter.post('/:id/delete', isAdmin, messagesController.postDeleteMessage);

module.exports = messagesRouter;
