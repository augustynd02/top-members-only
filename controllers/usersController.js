const db = require('../models/User');

const usersController = {
    getUsers: async (req, res) => {
        const users = await db.getAllUsers();
        console.log(users);
        res.render('pages/users', { users: users });
    }
}

module.exports = usersController;
