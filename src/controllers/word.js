const express = require('express');
const wordSchema = require('../schemas/word');

const createWord = async (req = express.request, res = express.response) => {
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
}

const getWords = async (req = express.request, res = express.response) => {
    try {
        const words = await wordSchema.getWords();

        return res.status(200).json(words);
    } catch (err) {
        console.log(err);
        return res.status(400).send(err.message);
    }
}

const getWordsByCategory = async (req = express.request, res = express.response) => {
    try {
        const { id } = req.params;

        const words = await wordSchema.getWordsByCategory(id);

        return res.status(200).json(words);
    } catch (err) {
        console.log(err);
        return res.status(400).send(err.message);
    }
}

const updateWordById = async (req = express.request, res = express.response) => {
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
}

const deleteWordById = async (req = express.request, res = express.response) => {
    try {
        const { id } = req.params;

        const word = await wordSchema.deleteWordById(id);

        return res.status(200).json(word);
    } catch (err) {
        console.log(err);
        return res.status(400).send(err.message);
    }
}

module.exports = { createWord, getWords, getWordsByCategory, updateWordById, deleteWordById };