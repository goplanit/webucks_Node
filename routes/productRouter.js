import express from 'express';
import {
  getDrinkDetailController,
  getDrinkListController,
} from '../controllers/productController';

const detailRouter = express.Router();

detailRouter.get('/', getDrinkListController);
detailRouter.get('/:id', getDrinkDetailController);

export default detailRouter;
