const createError = require('http-errors');
const Cv = require('../models/cv.model');

module.exports.create = (req, res, next) => {
    const cv = req.body;
    cv.owner = req.user.id;
    Cv.create(cv)
        .then((cv) => res.status(201).json(cv))
        .catch((error) => next(error));
}

module.exports.edit = (req, res, next) => {
    Cv.findOne({owner: req.user.id})
    .then((cv) => {
        if(!cv) {
            next(createError(404, `Cv not found`));
        } else if (cv.owner != req.user.id && !req.user.isAdmin()) {
            next(createError(403, `Cv not owned by you`));
        } else {
            delete req.body.owner;
            Object.assign(cv, req.body);
            return cv.save().then((cv) => res.json(cv));
        }
    })
    .catch((error) => next(error))
}

module.exports.detail = (req, res, next) => {
    Cv.findOne({owner: req.user.id})
        .populate("owner")
        .then((cv) => {
            if(!cv) {
                next(createError(404, `Cv not found`));
            } else {
                res.json(cv)
            }
         })
        .catch((error) => next(error))
}