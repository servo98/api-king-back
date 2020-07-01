import express from 'express';
import * as userController from '../controllers/UserController.js';
// import * as AlbumController from '../controllers/album.js';
//import middlewares
// import pagination from '../middlewares/pagination.jxº

const router = express.Router();

router.route('/')
    .get(userController.index)
    .post(userController.create);

router.route('/:id')
    .put(userController.update)
    .delete(userController.destroy);

export default router;