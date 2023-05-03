import express from 'express';
import wordController from '../controllers/word.js';

const router = express.Router();

router.post('/', wordController.createWord);
router.get('/', wordController.getWords);
router.get('/category/:id', wordController.getWordsByCategory);
router.put('/:id', wordController.updateWordById);
router.delete('/:id', wordController.deleteWordById);

export default router;