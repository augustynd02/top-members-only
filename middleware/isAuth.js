module.exports.isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        const error = new Error("Not authorized");
        error.status = 401;
        next(error);
    }
}
