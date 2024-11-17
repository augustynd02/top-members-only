const { Router } = require('express');
const indexRouter = Router();
const indexController = require('../controllers/indexController');

indexRouter.get('/', indexController.getIndex);
indexRouter.get('/sign-up', indexController.getSignUp);
indexRouter.get('/log-in', indexController.getLogIn);

module.exports = indexRouter;
