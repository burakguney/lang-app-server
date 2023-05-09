import { Request, Response } from 'express';
import wordSchema from '../schemas/wordSchema';
import categorySchema from '../schemas/categorySchema';

const createWord = async (req: Request, res: Response) => {
    try {
        const { turkish, english, hint, category } = req.body;

        const word = await wordSchema.createWord({ turkish, english, hint, category });

        return res.status(201).json(word);
    } catch (err) {
        console.log(err);
        return res.status(400).send(err.message);
    }
}

const getWords = async (req: Request, res: Response) => {
    try {
        const words = await wordSchema.getWords();

        return res.status(200).json(words);
    } catch (err) {
        console.log(err);
        return res.status(400).send(err.message);
    }
}

const getWordById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const word = await wordSchema.getWordById(id);

        return res.status(200).json(word);
    } catch (err) {
        console.log(err);
        return res.status(400).send(err.message);
    }
}

const getWordsByCategory = async (req: Request, res: Response) => {
    try {
        const { categoryName } = req.params;

        const category = await categorySchema.getCategoryByName(categoryName);

        if (!category) {
            return res.status(400).json({ "message": "Category not found." });
        }

        let words = await wordSchema.getWordsByCategory(category._id.toString());

        if (words.length === 0) {
            return res.sendStatus(204);
        }

        const wordsForGame = new Array();

        while (wordsForGame.length < 4) {
            const choosenWord = words[Math.floor(Math.random() * words.length)];
            wordsForGame.push(choosenWord);
            words = words.filter(word => word !== choosenWord);
        }

        return res.status(200).json(wordsForGame);
    } catch (err) {
        console.log(err);
        return res.status(400).send(err.message);
    }
}

const updateWordById = async (req: Request, res: Response) => {
    try {
        const { turkish, english, hint, category } = req.body;
        const { id } = req.params;

        const word = await wordSchema.updateWordById(id, { turkish, english, hint, category });

        return res.status(200).json(word);
    } catch (err) {
        console.log(err);
        return res.status(400).send(err.message);
    }
}

const deleteWordById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const word = await wordSchema.deleteWordById(id);

        return res.status(200).json(word);
    } catch (err) {
        console.log(err);
        return res.status(400).send(err.message);
    }
}

export default { createWord, getWords, getWordById, getWordsByCategory, updateWordById, deleteWordById };