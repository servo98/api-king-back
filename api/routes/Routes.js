import userRoutes from './UserRoutes.js';
import authRoutes from './AuthRoutes.js';
import testRoutes from './TestRoutes.js';
import projectRoutes from './ProjectRoutes.js';
import modelRoutes from './ModelRoutes.js';

import authorized from '../middlewares/authorized.js';

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
        middlewares: [authorized]
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
    }
];