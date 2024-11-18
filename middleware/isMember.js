const db = require('../models/User');

module.exports.isMember = (req, res, next) => {
    const membershipName = db.getMembership(req.user.membership_id);
    if(membershipName == 'member') {
        next();
    } else {
        res.status(401).json({msg: 'Not authorized'});
    }
}
