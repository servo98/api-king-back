import User from '../models/User.js';

export const register = async (req, res, next) => {
    try {
        const {name, email, password} = req.body;
        const user = await User.create({
            name,
            email,
            password
        });
        user.password = undefined;
        res.json({user});
    } catch (error) {
        next(new Error('dale'))
    }
}

export const login = (req, res) => {
    return res.json(req.body);
}
