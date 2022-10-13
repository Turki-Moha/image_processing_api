import express, { response, Router } from 'express';
import imageRouter from './api/imageRouter';

const router = express.Router();

router.use('/image', imageRouter);

export default router;
