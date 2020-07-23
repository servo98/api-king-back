import express from 'express';
import * as projectController from '../controllers/ProjectController.js';

const router = express.Router();

router.route('/')
    .get(projectController.index)
    .post(projectController.create);

router.route('/:id')
    .put(projectController.update)
    .delete(projectController.destroy);

export default router;