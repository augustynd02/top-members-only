const { body } = require("express-validator");

const validateRegister = [
    body('username')
        .trim()
        .notEmpty().withMessage('Username is required.')
        .isLength({ min: 2, max: 255 }).withMessage('Username must be at least 2 characters long.'),
    body('firstname').trim()
        .notEmpty().withMessage('First name is required.')
        .isLength({ min: 2, max: 255 }).withMessage('First name must be at least 2 characters long.'),

    body('lastname')
        .trim()
        .optional()
        .isLength({ min: 2, max: 255 }).withMessage('Last name must be at least 2 characters long.'),

    body('password')
        .trim()
        .notEmpty().withMessage('Password is required.')
        .isLength({ min: 4, max: 255 }).withMessage('Password must be at least 4 characters long.'),

    body('confirmpassword').trim()
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Passwords must be identical');
            }
            return true;
        }),
]

const validateLogin = [
    body('username')
        .trim()
        .notEmpty().withMessage('Username is required.')
        .isLength({ min: 2, max: 255 }).withMessage('Username must be at least 2 characters long.'),
    body('password')
        .trim()
        .notEmpty().withMessage('Password is required.')
        .isLength({ min: 4, max: 255 }).withMessage('Password must be at least 4 characters long.')
]

module.exports = {
    validateRegister,
    validateLogin
}
