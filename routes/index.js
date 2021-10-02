import express from 'express';
import listRouter from './listRouter';
import detailRouter from './productRouter';
import userRouter from './userRouter';

const router = express.Router();

router.use('/lists', listRouter);
router.use('/products', detailRouter);
router.use('/users', userRouter);

export default router;
