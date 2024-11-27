module.exports.isAdmin = (req, res, next) => {
    if (req.user.membership_id == 3) {
        next();
    } else {
        const error = new Error("Not authorized");
        error.status = 401;
        error.details = [{msg: "You're not an administrator."}];
        next(error);
    }
}
