const express = require('express');
const wordController = require('../controllers/word');

const router = express.Router();

router.post('/', wordController.createWord);
router.get('/', wordController.getWords);
router.get('/category/:id', wordController.getWordsByCategory);
router.put('/:id', wordController.updateWordById);
router.delete('/:id', wordController.deleteWordById);

module.exports = router;