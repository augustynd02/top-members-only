const { Router } = require('express');
const { isAuth } = require('../middleware/isAuth');
const { isAdmin } = require('../middleware/isAdmin');
const { validateMessage } = require('../middleware/validation');
const { validationResult } = require('express-validator');

const messagesController = require('../controllers/messagesController');
const messagesRouter = Router();

messagesRouter.get('/', isAuth, messagesController.getMessages);

messagesRouter.get('/new', isAuth, messagesController.getNewMessage);
messagesRouter.post('/new', isAuth, validateMessage, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed.')
        error.status = 400;
        error.details = errors.array();
        next(error)
    } else {
        next();
    }
}, messagesController.postNewMessage);

messagesRouter.get('/:id/edit', isAdmin, messagesController.getEditMessage);
messagesRouter.post('/:id/edit', isAdmin, validateMessage, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed.')
        error.status = 400;
        error.details = errors.array();
        next(error)
    } else {
        next();
    }
}, messagesController.postEditMessage);

messagesRouter.get('/:id/delete', isAdmin, messagesController.getDeleteMessage);
messagesRouter.post('/:id/delete', isAdmin, messagesController.postDeleteMessage);

module.exports = messagesRouter;
