const express = require('express');
router = express.Router();
pages = require('../controllers/pages');

router.get('/', pages.home);
router.get('/contact', pages.contact);
router.get('/question-submit', pages.questionSubmit);
router.get('/quick-start', pages.quickStart);

module.exports = router;