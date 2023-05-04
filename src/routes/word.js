import express from 'express';
import wordSchema from '../schemas/word.js';

const router = express.Router();

//creteWord
router.post('/createWord', async (req, res) => {
    try {
        const { turkish, english, hint, category } = req.body;

        const word = await wordSchema.createWord({
            turkish: turkish,
            english: english,
            hint: hint,
            category: category
        });

        return res.status(201).json(word);
    } catch (err) {
        console.log(err);
        return res.status(400).send(err.message);
    }
});

//getWords
router.get('/getWords', async (req, res) => {
    try {
        const words = await wordSchema.getWords();

        return res.status(200).json(words);
    } catch (err) {
        console.log(err);
        return res.status(400).send(err.message);
    }
});

//getWordById
router.get('/getWordById/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const word = await wordSchema.getWordById(id);

        return res.status(200).json(word);
    } catch (err) {
        console.log(err);
        return res.status(400).send(err.message);
    }
});

//getWordsByCategoryId
router.get('/getWordsByCategoryId/:id', async (req, res) => {
    try {
        const { id } = req.params;

        let words = await wordSchema.getWordsByCategoryId(id);

        let wordsForGame = new Array();

        while (wordsForGame.length < 4) {
            let choosenWord = words[Math.floor(Math.random() * words.length)];
            wordsForGame.push(choosenWord);
            words = words.filter(word => word !== choosenWord);
        }

        return res.status(200).json(wordsForGame);
    } catch (err) {
        console.log(err);
        return res.status(400).send(err.message);
    }
});

//updateWordById
router.put('/updateWordById/:id', async (req, res) => {
    try {
        const { turkish, english, hint, category } = req.body;
        const { id } = req.params;

        const word = await wordSchema.updateWordById(id, {
            turkish: turkish,
            english: english,
            hint: hint,
            category: category
        })

        return res.status(200).json(word);
    } catch (err) {
        console.log(err);
        return res.status(400).send(err.message);
    }
});

//deleteWordById
router.delete('/deleteWordById/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const word = await wordSchema.deleteWordById(id);

        return res.status(200).json(word);
    } catch (err) {
        console.log(err);
        return res.status(400).send(err.message);
    }
});

export default router;