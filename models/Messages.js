const pool = require('../config/database');

const Messages = {
    getAllMessages: async (req, res) => {
        const { rows } = await pool.query("SELECT * FROM messages;");
        return rows;
    }
}

module.exports = Messages;
