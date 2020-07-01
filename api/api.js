import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes/Routes.js';

const api = express();

// parse application/x-www-form-urlencoded
api.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
api.use(bodyParser.json())


routes.forEach(route => {
    api.use(route.path, route.middlewares, route.resolver);
});

export default api;