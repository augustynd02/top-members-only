const pool = require('../config/database');

const User = {
    addUser: async (data) => {
        console.log(data)
        await pool.query('INSERT INTO users (username, password, firstname, lastname, membership_id) VALUES ($1, $2, $3, $4, $5);', [data.username, data.password, data.firstname, data.lastname, 1]);
    }
}

module.exports = User;
