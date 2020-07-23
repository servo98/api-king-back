import mongoose from 'mongoose';


export default mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nombre obligatorio']
    },
    email: {
        type: String,
        required: [true, 'Correo obligatorio'],
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'El campo debe ser mayor a 8 dígitos'],
    },
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }]
}));