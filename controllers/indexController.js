const indexController = {
    getIndex: (req, res) => {
        res.render('pages/index');
    },
    getSignUp: (req, res) => {
        res.render('pages/sign-up');
    },
    getLogIn: (req, res) => {
        res.render('pages/log-in');
    }
}

module.exports = indexController;
