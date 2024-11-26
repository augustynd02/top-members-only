const pool = require('../config/database');

const Messages = {
    getAllMessages: async () => {
        const { rows } = await pool.query("SELECT * FROM messages;");
        return rows;
    },
    getMessageById: async (id) => {
        const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1;", [id]);
        return rows[0];
    },
    postNewMessage: async (data, user_id) => {
        await pool.query('INSERT INTO messages (title, message, user_id) VALUES ($1, $2, $3);', [data.title, data.message, user_id])
    },
    editMessage: async (data) => {
        await pool.query('UPDATE messages SET title = $1, message = $2 WHERE id = $3;', [data.title, data.message, data.id]);
    },
    deleteMessage: async (data) => {
        await pool.query('DELETE FROM messages WHERE id = $1', [data.id]);
    }
}

module.exports = Messages;
