import express from 'express';

const router = express.Router();

router.route('/')
    .get((req, res) => {
        return res.json({
            msg: 'hola',
            res
        });
    });

export default router;