import { Router } from 'express';

import categoryController from '../controllers/categoryController';

export default (router: Router) => {
    router.get('/api/category', categoryController.getCategories);
    router.post('/api/category', categoryController.createCategory);
    router.put('/api/category/:id', categoryController.updateCategoryById);
    router.get('/api/category/:id', categoryController.getCategoryById);
    router.delete('/api/category/:id', categoryController.deleteCategoryById);
}