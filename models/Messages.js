const pool = require('../config/database');

const Messages = {
    getAllMessages: async (req, res) => {
        const result = pool.query("SELECT * FROM messages;");
        return result;
    }
}

module.exports = Messages;
