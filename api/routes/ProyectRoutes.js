import express from 'express';
import * as proyectController from '../controllers/ProyectController.js';

const router = express.Router();

router.route('/')
    .get(proyectController.index)
    .post(proyectController.create);

router.route('/:id')
    .put(proyectController.update)
    .delete(proyectController.destroy);

export default router;