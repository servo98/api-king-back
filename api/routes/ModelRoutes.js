import express from 'express';
import * as modelController from '../controllers/ModelController.js';

const router = express.Router();

router.route('/')
    .get(modelController.index)
    .post(modelController.create);

router.route('/:id')
    .put(modelController.update)
    .delete(modelController.destroy);

export default router;