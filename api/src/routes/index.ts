import authRouter from './authenticate';
import express from 'express';
const router = express.Router();

router.use('/', authRouter);

export default router;