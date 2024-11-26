const { Router } = require('express');
const messagesRouter = Router();
const messagesController = require('../controllers/messagesController');
const { isAuth } = require('../middleware/isAuth');

messagesRouter.get('/', isAuth, messagesController.getMessages);
messagesRouter.get('/new', isAuth, messagesController.getNewMessage);
messagesRouter.post('/new', isAuth, messagesController.postNewMessage);

messagesRouter.get('/:id/edit', isAuth, messagesController.getEditMessage);
messagesRouter.post('/:id/new', isAuth, messagesController.postEditMessage);

module.exports = messagesRouter;
