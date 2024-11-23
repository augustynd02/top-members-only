const { Router } = require('express');
const indexRouter = Router();
const indexController = require('../controllers/indexController');
const passport = require('passport');
const { isAuth } = require('../middleware/isAuth');
const { validateRegister } = require('../middleware/validation');
const { validationResult } = require('express-validator');
require('../config/passport');

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
indexRouter.post('/login', passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/register"
    })
);
indexRouter.get('/logout', indexController.logout);
indexRouter.get('/membership', isAuth, indexController.getMembership);
indexRouter.post('/membership', isAuth, indexController.postMembership);

module.exports = indexRouter;
