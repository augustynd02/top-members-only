const { Router } = require('express');
const messagesRouter = Router();
const messagesController = require('../controllers/messagesController');
const { isAuth } = require('../middleware/isAuth');

messagesRouter.get('/', isAuth, messagesController.getMessages);
messagesRouter.get('/new', isAuth, messagesController.getNewMessage);
messagesRouter.post('/new', isAuth, messagesController.postNewMessage);

messagesRouter.get('/:id/edit', isAuth, messagesController.getEditMessage);
messagesRouter.post('/:id/new', isAuth, messagesController.postEditMessage);
messagesRouter.get('/:id/delete', messagesController.getDeleteMessage);
messagesRouter.post('/:id/delete', messagesController.postDeleteMessage);

module.exports = messagesRouter;
