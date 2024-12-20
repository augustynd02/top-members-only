const { Router } = require('express');
const { isAuth } = require('../middleware/isAuth');
const { validateRegister, validateLogin } = require('../middleware/validation');
const { validationResult } = require('express-validator');
const passport = require('passport');
require('../config/passport');

const indexController = require('../controllers/indexController');
const indexRouter = Router();

indexRouter.get('/', indexController.getIndex);

indexRouter.get('/register', indexController.getRegister);
indexRouter.post('/register', validateRegister, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed.')
        error.status = 400;
        error.details = errors.array();
        next(error)
    } else {
        next();
    }
}, indexController.postRegister);

indexRouter.get('/login', indexController.getLogin);
indexRouter.post('/login', validateLogin, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed.')
        error.status = 400;
        error.details = errors.array();
        next(error)
    } else {
        next();
    }
}, passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/register"
    })
);

indexRouter.get('/logout', indexController.logout);

indexRouter.get('/membership', isAuth, indexController.getMembership);
indexRouter.post('/membership', isAuth, indexController.postMembership);

module.exports = indexRouter;
