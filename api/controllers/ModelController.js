import Model from '../models/Model.js';
import Project from '../models/Project.js';

export const index = () => {
}

export const create = async (req, res) => {
    const {name, fields, projectId} = req.body;
    try {
        const project = await Project.findById(projectId)
            .populate({
                path:'models'
            });
        if(!project){
            return res.status(404).json({error: 'Project not found'});
        }
        const found = project.models.find(model => model.name == name);
        if(!found){
            const model = await Model.create({
                name,
                fields
            });
            project.models.push(model.id);
            project.save();
            
            return res.json({model})
        }
        return res.status(401).json({error: 'Model already exists'});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error});
    }
}

export const update = () => {

}

export const destroy = () => {
    
}

