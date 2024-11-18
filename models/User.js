const pool = require('../config/database');

const User = {
    getUser: async (username) => {
        const { rows } = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
        return rows[0];
    },
    getUserById: async (id) => {
        const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
        return rows[0];
    },
    addUser: async (data) => {
        console.log(data)
        await pool.query('INSERT INTO users (username, password, firstname, lastname, membership_id) VALUES ($1, $2, $3, $4, $5);', [data.username, data.password, data.firstname, data.lastname, 1]);
    },
    getMembership: async (membership_id) => {
        const { rows } = await pool.query("SELECT name FROM memberships WHERE id = $1", [membership_id]);
        return rows[0];
    }
}

module.exports = User;
