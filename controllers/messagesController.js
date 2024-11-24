const db = require('../models/Messages');

const messagesController = {
    getMessages: async (req, res) => {
        const messages = await db.getAllMessages();
        console.log(messages);
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
