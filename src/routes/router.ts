import { Router } from 'express';
import word from './wordRoute';
import category from './categoryRoute';

const router = Router();

export default (): Router => {

    word(router);
    category(router);

    return router;
};