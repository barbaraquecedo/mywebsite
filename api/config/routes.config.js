const express = require('express');
const router = express.Router();
const blogEntries = require('../controllers/blog-entries.controller');
const secure = require('../middlewares/secure.mid');
const auth = require('../controllers/auth.controller');
const cv = require('../controllers/cv.controller');


router.get('/blog-entries', secure.isAuthenticated, blogEntries.list)
router.post('/blog-entries', secure.isAuthenticated, blogEntries.create)
router.get('/blog-entries/:id', blogEntries.detail)
router.delete('blog-entries/:id', secure.isAuthenticated, blogEntries.delete)

router.post('/register', auth.register)
router.post('/login', auth.login)
router.post('/logout', auth.logout)

router.post("/cv", secure.isAuthenticated , cv.create);
router.put("/cv", secure.isAuthenticated, cv.edit);

/*/







router.get("/podcasts", podcasts.list);
router.get("/podcasts/:id", podcasts.detail);
router.post('/podcasts', secure.isAuthenticated, podcasts.create);

*/


module.exports = router;
