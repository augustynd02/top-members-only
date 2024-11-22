const db = require('../models/Messages');

const messagesController = {
    getMessages: async (req, res) => {
        const messages = await db.getAllMessages();
        res.render('pages/messages', { messages: messages });
    }
}

module.exports = messagesController;
