import { Router } from 'express';

import categoryController from '../controllers/categoryController';

export default (router: Router) => {
    router.get('/api/category', categoryController.getCategories);
    router.post('/api/category', categoryController.createCategory);
}