const createError = require('http-errors');
const Cv = require('../models/cv.model');

module.exports.create = (req, res, next) => {
    const cv = req.body;
    cv.owner = req.body.id;
    Cv.create(cv)
        .then((cv) => res.status(201).json(cv))
        .catch((error) => next(error));
}

module.exports.edit = (req, res, next) => {
    Cv.findOne({})
    .then((cv) => {
        if(!cv) {
            next(createError(404, `Cv ${req.params.id} not found`));
        } else if (cv.ownerId != req.user.id && !req.user.isAdmin()) {
            next(createError(403, `Cv ${req.params.id} not owned by you`));
        } else {
            delete req.body.ownerId;
            Object.assign(cv, req.body);
            return cv.save().then((cv) => res.json(cv));
        }
    })
    .catch((error) => next(error))
}