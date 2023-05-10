import { Request, Response } from 'express';
import categorySchema from '../schemas/categorySchema';

const getCategories = async (req: Request, res: Response) => {
    try {
        const categories = await categorySchema.getCategories();

        return res.status(200).json(categories);
    } catch (error) {
        console.log(error);
        return res.status(400).send(error.message);
    }
}

const createCategory = async (req: Request, res: Response) => {
    try {
        const { name, description, } = req.body;

        const category = await categorySchema.createCategory({ name, description });

        return res.status(200).json(category);
    } catch (error) {
        console.log(error);
        return res.status(400).send(error.message);
    }
}

const updateCategoryById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;

        const category = await categorySchema.updateCategoryById(id, { name, description });

        return res.status(200).json(category);
    } catch (error) {
        console.log(error);
        return res.status(400).send(error.message);
    }
}

const deleteCategoryById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const category = await categorySchema.deleteCategoryById(id);

        return res.status(200).json(category);
    } catch (error) {
        console.log(error);
        return res.status(400).send(error.message);
    }
}

const getCategoryById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const category = await categorySchema.getCategoryById(id);

        return res.status(200).json(category);
    } catch (error) {
        console.log(error);
        return res.status(400).send(error.message);
    }
}

export default { getCategories, createCategory, updateCategoryById, deleteCategoryById, getCategoryById };