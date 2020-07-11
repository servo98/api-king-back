import User from '../models/User.js';
import jwt from 'jwt-simple';
import bcrypt from 'bcrypt';
import {auth as authConfig} from '../utils/config.js';

export const register = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const cryptPass = await bcrypt.hash(password, authConfig.salt);
        const user = await User.create({
            name,
            email,
            password: cryptPass
        });
        user.password = undefined;
        return res.json({user});
    } catch (error) {
        return res.status(400).json({error});
    }
}

export const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({error: 'User not found'})
        }
        const match = await bcrypt.compare(password, user.password);
        if(!match){
            return res.status(401).json({error: 'Bad Credentials'});
        }

        const payload = {
            userId: user.id
        };
        const token = jwt.encode(payload, authConfig.secret);
        return res.status(200).json({token});
    } catch (error) {
        return res.status(500).json({error});
    }
}
