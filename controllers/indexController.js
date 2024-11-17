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
        db.addUser(req.body);
        res.redirect('/');
    },
    getLogin: (req, res) => {
        res.render('pages/login');
    }
}

module.exports = indexController;
