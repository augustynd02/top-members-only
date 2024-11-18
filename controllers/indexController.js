const bcrypt = require('bcryptjs');
const db = require('../models/User');

const indexController = {
    getIndex: (req, res) => {
        res.render('pages/index');
    },
    getRegister: (req, res) => {
        res.render('pages/register');
    },
    postRegister: async (req, res) => {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        await db.addUser(req.body);
        res.redirect('/');
    },
    getLogin: (req, res) => {
        res.render('pages/login');
    },
    getProtectedRoute: (req, res) => {
        res.render('pages/protected');
    },
    logout: (req, res, next) => {
        req.logout(err => {
            if (err) {
                return next(err);
            }
            req.session.destroy(() => {
                res.clearCookie('connect.sid');
                res.redirect('/login');
            });
        });
    },
}

module.exports = indexController;