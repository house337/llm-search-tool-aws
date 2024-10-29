import express from 'express';
const router = express.Router();

import {
    createAnalysis, getAllAnalysis,
} from '../controllers/analysisController.js';

router.route('/').post(createAnalysis)
router.route('/').get(getAllAnalysis)


export default router;