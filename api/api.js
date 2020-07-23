import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './routes/Routes.js';

const api = express();

api.use(cors())

// parse application/x-www-form-urlencoded
api.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
api.use(bodyParser.json())


routes.forEach(route => {
    api.use(route.path, route.middlewares, route.resolver);
});

api.get('*', (__, res) => {
    res.status(404).json('that does not exist 😉');
});

export default api;