const db = require('../models/User');

const usersController = {
    getUsers: async (req, res) => {
        const users = await db.getAllUsers();
        res.render('pages/user/users', { users: users });
    },
    getDeleteUser: async (req, res) => {
        const user = await db.getUserById(req.params.id);
        res.render('pages/user/deleteUser.ejs', { user: user });
    },
    postDeleteUser: async (req, res) => {
        await db.deleteUser(req.body);
        res.redirect('/users');
    }
}

module.exports = usersController;
