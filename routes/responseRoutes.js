import express from 'express';
const router = express.Router();

import {
    createResponse, getAllResponse,
} from '../controllers/questionResponseController.js';

router.route('/').post(createResponse)
router.route('/').get(getAllResponse)

export default router;