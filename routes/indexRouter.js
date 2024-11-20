const { Router, application } = require('express');
const indexRouter = Router();
const indexController = require('../controllers/indexController');
const passport = require('passport');
const { isAuth } = require('../middleware/isAuth');
require('../config/passport');

indexRouter.get('/', indexController.getIndex);
indexRouter.get('/register', indexController.getRegister);
indexRouter.post('/register', indexController.postRegister);
indexRouter.get('/login', indexController.getLogin);
indexRouter.post('/login', passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/register"
    })
);
indexRouter.get('/logout', indexController.logout);
indexRouter.get('/membership', indexController.getMembership);
indexRouter.get('/protected-route', isAuth, indexController.getProtectedRoute);

module.exports = indexRouter;
