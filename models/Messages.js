const pool = require('../config/database');

const Messages = {
    getAllMessages: async () => {
        const { rows } = await pool.query("SELECT * FROM messages;");
        return rows;
    },
    postNewMessage: async (data, user_id) => {
        await pool.query('INSERT INTO messages (title, message, user_id) VALUES ($1, $2, $3);', [data.title, data.message, user_id])
    }
}

module.exports = Messages;
