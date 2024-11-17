const { Router } = require('express');
const indexRouter = Router();
const indexController = require('../controllers/indexController');

indexRouter.get('/', indexController.getIndex);
indexRouter.get('/register', indexController.getRegister);
indexRouter.post('/register', indexController.postRegister);
indexRouter.get('/login', indexController.getLogin);

module.exports = indexRouter;
