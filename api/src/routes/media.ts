import express from 'express';
import MediaController from '../controllers/media.controller';


const router = express.Router();


const { 
    getMedia,
    getMediaById 
} = new MediaController();


router.post('/media', getMedia);
router.post('/media/:id', getMediaById);

export default router;