const { Router } = require('express');
const messagesRouter = Router();
const messagesController = require('../controllers/messagesController');
const { isAuth } = require('../middleware/isAuth');

messagesRouter.get('/', isAuth, messagesController.getMessages);
messagesRouter.get('/new', isAuth, messagesController.getNewMessage);
messagesRouter.post('/new', isAuth, messagesController.postNewMessage);

module.exports = messagesRouter;
