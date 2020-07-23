import Project from '../models/Project.js';
import User from '../models/User.js';


export const index = (req, res) => {
}

export const create = async (req, res) => {
    const {userId, name, database} = req.body;
    try {
        const project = await Project.create({
            name,
            database
        });
        let user = await User.findById(userId);
        user.projects.push(project.id);
        user = await user.save();
        return res.json({project});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({error});
    }

}

export const update = () => {

}

export const destroy = () => {
    
}

