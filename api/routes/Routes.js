import userRoutes from './UserRoutes.js';
import authRoutes from './AuthRoutes.js';
import testRoutes from './TestRoutes.js';
import proyectRoutes from './ProyectRoutes.js';

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
        path: '/proyects',
        resolver: proyectRoutes,
        middlewares: [authorized],
        
    }
];