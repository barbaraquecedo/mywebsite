const express = require('express');
const router = express.Router();
const blogEntries = require('../controllers/blog-entries.controller');

router.get('/blog-entries', blogEntries.list)
router.post('/blog-entries', blogEntries.create)

/*/


router.get('/blog-entries/:id', blogEntries.detail)


router.get("/cv", cv.detail);
router.post("/cv", secure.isAuthenticated, cv.edit);

router.get("/podcasts", podcasts.list);
router.get("/podcasts/:id", podcasts.detail);
router.post('/podcasts', secure.isAuthenticated, podcasts.create);

*/


module.exports = router;
