import userRoutes from './UserRoutes.js';
import authRoutes from './AuthRoutes.js';
import testRoutes from './TestRoutes.js';
import projectRoutes from './ProjectRoutes.js';
import modelRoutes from './ModelRoutes.js';
import apiRoutes from './ApiRoutes.js';

import authorized from '../middlewares/authorized.js';
import auth0 from '../middlewares/auth0.js';

export default [
    {
        path: '/users',
        resolver: userRoutes,
        middlewares: []
    },
    {
        path: '/auth',
        resolver: authRoutes,
        middlewares: []
    },
    {
        path: '/test',
        resolver: testRoutes,
        middlewares: [auth0]
    },
    {
        path: '/projects',
        resolver: projectRoutes,
        middlewares: [authorized],
    },
    {
        path: '/models',
        resolver: modelRoutes,
        middlewares: [authorized],
    },
    {
        path: '/api/:slug',
        resolver: apiRoutes,
        middlewares: [],
    },
];