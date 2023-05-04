import express from 'express';
import categorySchema from '../../schemas/category';

const router = express.Router();

//getCategories
router.get('/getCategories', async (req, res) => {
    try {
        const categories = await categorySchema.getCategories();

        return res.status(200).json(categories);
    } catch (error) {
        console.log(error);
        return res.status(400).send(error.message);
    }
});

//createCategory
router.post('/createCategory', async (req, res) => {
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
});

export default router;