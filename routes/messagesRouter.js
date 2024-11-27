const { Router } = require('express');
const { isAuth } = require('../middleware/isAuth');
const { isAdmin } = require('../middleware/isAdmin');

const messagesController = require('../controllers/messagesController');
const messagesRouter = Router();

messagesRouter.get('/', isAuth, messagesController.getMessages);

messagesRouter.get('/new', isAuth, messagesController.getNewMessage);
messagesRouter.post('/new', isAuth, messagesController.postNewMessage);

messagesRouter.get('/:id/edit', isAdmin, messagesController.getEditMessage);
messagesRouter.post('/:id/edit', isAdmin, messagesController.postEditMessage);

messagesRouter.get('/:id/delete', isAdmin, messagesController.getDeleteMessage);
messagesRouter.post('/:id/delete', isAdmin, messagesController.postDeleteMessage);

module.exports = messagesRouter;
