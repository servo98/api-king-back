import userRoutes from './UserRoutes.js';
import authRoutes from './AuthRoutes.js';
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
    }
];