const express = require('express');
const wordSchema = require('../schemas/wordSchema');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { turkish, english, hint } = req.body;

        if (!turkish || !english || !hint) {
            return res.sendStatus(400);
        }

        const word = await wordSchema.createWord({
            turkish: turkish,
            english: english,
            hint: hint
        });

        return res.status(200).json(word);
    } catch (error) {
        console.log(error);
        return res.status(400).send(error.message);
    }
})

module.exports = router;