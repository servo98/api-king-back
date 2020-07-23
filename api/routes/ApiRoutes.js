import express from 'express';
import * as projectController from '../controllers/ProjectController.js';

const router = express.Router();

router.route('/:model')
    .get(projectController.index)
    .post(projectController.create);


export default router;