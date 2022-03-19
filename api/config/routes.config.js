const express = require('express');
const router = express.Router();
const blogEntries = require('../controllers/blog-entries.controller');

router.get('/blog-entries', secure.isAuthenticated, blogEntries.list)
router.post('/blog-entries', secure.isAuthenticated, blogEntries.create)
router.get('/blog-entries/:id', blogEntries.detail)
router.delete('blog-entries/:id', secure.isAuthenticated, blogEntries.delete)

router.post('/register', auth.register)
router.get('/login', auth.login)
router.post('/logout', auth.logout)

/*/





router.get("/cv", cv.detail);
router.post("/cv", secure.isAuthenticated, cv.edit);

router.get("/podcasts", podcasts.list);
router.get("/podcasts/:id", podcasts.detail);
router.post('/podcasts', secure.isAuthenticated, podcasts.create);

*/


module.exports = router;
