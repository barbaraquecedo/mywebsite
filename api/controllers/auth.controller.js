const createError = require('http-errors');
const User = require('../models/user.model');

module.exports.register = (req, res, next) => {
    User.findOne( { email: req.body.email })
    .then(user => {
        if (!user) {
            return User.create(req.body)
                .then(user => res.status(201).json(user))
        } else {
            const error = new Error('User is already registered');
            error.errors = {
                email: 'User email already registered'
            }
            next(createError(400, error));
        }
    })
    .catch(error => next(error))
}

module.exports.login = (req, res, next) => {
    function returnInvalidUserError() {
        const error = new Error('Invalid user or password');
        error.errors = {
            email: 'Invalid user or password'
        }
        next(createError(400, error));
    }

    User.findOne( { email: req.body.email })
    .then(user => {
        if(!user) {
            returnInvalidUserError();
        } else {
            return user.checkPassword(req.body.password)
            .then(match => {
                if (match) {
                    req.session.userId = user.id;
                    res.status(201).json(user);
                } else {
                    returnInvalidUserError();
                }
            })
        }
    })
    .catch(error => next(error));
}

module.exports.logout = (req, res, next) => {
    req.session.destroy();
    req.session = null;
    res.status(204).send();
}