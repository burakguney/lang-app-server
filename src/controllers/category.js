const express = require('express');
const categorySchema = require('../schemas/category');

const createCategory = async (req = express.request, res = express.response) => {
    try {
        const { name } = req.body;

        const category = await categorySchema.createCategory({
            name: name
        });

        return res.status(200).json(category);
    } catch (error) {
        console.log(error);
        return res.status(400).send(error.message);
    }
}

const getCategories = async (req = express.request, res = express.response) => {
    try {
        const categories = await categorySchema.getCategories();

        return res.status(200).json(categories);
    } catch (error) {
        console.log(error);
        return res.status(400).send(error.message);
    }
}

module.exports = { createCategory, getCategories };