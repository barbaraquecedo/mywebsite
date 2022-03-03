const express = require('express');
const router = express.Router();
const blogEntries = require('../controllers/blog-entries.controller');

router.get('/blog-entries', blogEntries.list)

module.exports = router;
