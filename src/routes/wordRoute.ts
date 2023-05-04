import { Router } from 'express';

import wordController from '../controllers/wordController';

export default (router: Router) => {
    router.post('/api/word', wordController.createWord);
    router.get('/api/word', wordController.getWords);
    router.get('/api/word/:id', wordController.getWordById);
    router.get('/api/word/category/:id', wordController.getWordsByCategoryId);
    router.put('/api/word/:id', wordController.updateWordById);
    router.delete('/api/word/:id', wordController.deleteWordById);
}