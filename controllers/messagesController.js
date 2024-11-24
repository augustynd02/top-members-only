const db = require('../models/Messages');
const { formatDate } = require('../utils/formatDate');

const messagesController = {
    getMessages: async (req, res) => {
        const messages = await db.getAllMessages();
        console.log(messages);
        messages.forEach(message => message.created_at = formatDate(message.created_at));
        res.render('pages/messages', { messages: messages });
    },
    getNewMessage: (req, res) => {
        res.render('pages/newMessage');
    },
    postNewMessage: async (req, res) => {
        await db.postNewMessage(req.body, req.user.id);
        res.redirect('/messages');
    }
}

module.exports = messagesController;
