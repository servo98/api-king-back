import Project from '../models/Project.js';
import User from '../models/User.js';


export const index = async (req, res) => {
    const {userId} = req.body;
    try {
        const user = await User.findById(userId).populate({
            path:'projects',
            populate: {
                path: 'models'
            }
        });
        return res.json({projects: user.projects});
    } catch (error) {
        return res.status(500).json({error});
    }
}

export const create = async (req, res) => {
    const {userId, name, slug, description, dbUser, dbPass, dbHost, dbName} = req.body;
    try {
        const already = await Project.findOne({slug});
        if(already){
            return res.status(401).json({error: 'slug already existing'});
        }
        const project = await Project.create({
            name,
            slug,
            description,
            dbUser,
            dbPass,
            dbHost,
            dbName
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

export const update = async (req, res) => {
    try {
        const {name, description, slug, dbName, dbPass, dbUser, dbHost, _id} = req.body;
        const already = await Project.findOne({slug});
        if(already && _id != already.id){
            return res.status(401).json({error: 'slug already existing'});
        }
        const projectId = req.params.id;
        let project = await Project.findById(projectId);
        project.name = name;
        project.description = description;
        project.dbName = dbName;
        project.dbPass = dbPass;
        project.dbUser = dbUser;
        project.dbHost = dbHost;
        project.slug = slug;
        project = await project.save();
        if(!project){
            return res.status(404).json({error: 'project not found'});
        }
        return res.json({project});
    } catch(error) {
        console.log(error);
        return res.status(500).json({error});
    }
}

export const destroy = () => {
    
}

export const show = async (req, res) => {
    try {
        const projectId = req.params.id;
        const project = await Project.findById(projectId);
        if(!project){
            return res.status(404).json({error: 'project not found'});
        }
        return res.json({project});
    } catch(error) {
        return res.status(500).json({error});
    }
}
