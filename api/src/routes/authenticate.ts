import express from 'express';
import AuthenticationController from '../controllers/authentication.controller';


const router = express.Router();


const { login } = new AuthenticationController();


router.post('/login', login);

export default router;