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

module.exports.detail = (req, res, next) => {
    BlogEntry.findById(req.params.id)
    .then((blogEntry) => {
        if (!blogEntry) {
            next (createError(404, `Blog article ${req.params.id} not found)`));
        } else { res.json(blogEntry)};
    })
    .catch((error) => next(error))
}

module.exports.delete = (req, res, next) => {
    BlogEntry.findById(req.params.id)
    .then((blogEntry) => {
        if (!blogEntry) {
            next (createError(404, `Blog article ${req.params.id} not found`));
        } // else if (blogEntry.owner != req.params.id && req.user.isAdmin()) {
          //  next (createError(403, `Blog article ${req.params.id} is not owned by you`));} 
          else {
            return blogEntry.deleteOne({ _id: blogEntry.id }).then(() =>
                res.status(204).send()
            )
        }
    })
    .catch((error) => next(error));
}