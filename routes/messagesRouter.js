const { Router } = require('express');
const messagesRouter = Router();
const messagesController = require('../controllers/messagesController');
const { isAuth } = require('../middleware/isAuth');

messagesRouter.get('/', isAuth, messagesController.getMessages);

module.exports = messagesRouter;
