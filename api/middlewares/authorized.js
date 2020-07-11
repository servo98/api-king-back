import jwt from 'jwt-simple';
import {auth} from '../utils/config.js';
import User from '../models/User.js';
export default async (req, res, next) => {
    const token = req.headers.authorization;
    if(!token){
        return res.status(403).json({error: 'auhtorization missing'});
    }
    try {
        const payload = jwt.decode(token, auth.secret);
        const user = User.findById(payload.userId);
        if(!user){
            return res.status(403).json({error: 'Unauthorized'});
        }
        next();
    } catch (error) {
        return res.status(403).json({error: 'Bad token'});
    }
};