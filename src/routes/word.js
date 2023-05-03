import express from 'express';
import wordSchema from '../schemas/word.js';

const router = express.Router();

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

router.get('/getWords', async (req, res) => {
    try {
        const words = await wordSchema.getWords();

        return res.status(200).json(words);
    } catch (err) {
        console.log(err);
        return res.status(400).send(err.message);
    }
});

router.get('/getWordsByCategory/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const words = await wordSchema.getWordsByCategory(id);

        return res.status(200).json(words);
    } catch (err) {
        console.log(err);
        return res.status(400).send(err.message);
    }
});

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