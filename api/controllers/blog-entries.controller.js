const createError = require('http-errors');
const BlogEntry = require('../models/blog-entry.model');

module.exports.create = (req, res, next) => {
    const blogEntry = req.body;
    //blogEntry.owner = req.user.id;
    BlogEntry.create(blogEntry)
        .then((blogEntry) => res.status(201).json(blogEntry))
        .catch((error) => next(error));
}

module.exports.list = (req, res, next) => {
    BlogEntry.find()
        .then((blogEntries) => res.json(blogEntries))
        .catch((error) => next(error));
}