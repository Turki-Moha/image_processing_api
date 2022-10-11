import express, { Router } from 'express';
import imageRouter from './image/imageRouter';

const router = express.Router();

router.use('/images',imageRouter);

export default router;