const express = require('express');
router = express.Router();
pages = require('../controllers/pages');

router.get('/', pages.hello);
router.get('/contact', pages.contact);
router.get('/question-submit', pages.questionSubmit);
router.get('/quick-start', pages.quickStart);
router.get('/hello', pages.hello);

module.exports = router;