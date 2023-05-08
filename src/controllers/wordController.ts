import { Request, Response } from 'express';
import wordSchema from '../schemas/wordSchema';

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

const getWordsByCategoryId = async (req: Request, res: Response) => {
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

export default { createWord, getWords, getWordById, getWordsByCategoryId, updateWordById, deleteWordById };