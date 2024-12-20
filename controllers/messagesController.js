const db = require('../models/Messages');
const { formatDate } = require('../utils/formatDate');

const messagesController = {
    getMessages: async (req, res) => {
        const messages = await db.getAllMessages();
        messages.forEach(message => message.created_at = formatDate(message.created_at));
        res.render('pages//messages/messages', { messages: messages });
    },
    getNewMessage: (req, res) => {
        res.render('pages/messages/newMessage');
    },
    postNewMessage: async (req, res) => {
        await db.postNewMessage(req.body, req.user.id);
        res.redirect('/messages');
    },
    getEditMessage: async (req, res) => {
        const message = await db.getMessageById(req.params.id);
        res.render('pages/messages/editMessage', { message: message });
    },
    postEditMessage: async (req, res) => {
        await db.editMessage(req.body);
        res.redirect('/messages');
    },
    getDeleteMessage: async (req, res) => {
        const message = await db.getMessageById(req.params.id);
        res.render('pages/messages/deleteMessage', { message: message });
    },
    postDeleteMessage: async (req, res) => {
        await db.deleteMessage(req.body);
        res.redirect('/messages');
    }
}

module.exports = messagesController;
