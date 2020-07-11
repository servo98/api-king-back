import mongoose from 'mongoose';


export default mongoose.model('Proyect', new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nombre obligatorio']
    },
    database: {
        user: {
            type: String,
            required: true
        },
        pass: {
            type: String,
            required: true
        },
        host: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    models: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Model'
    }],
    controllers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Controller'
    }]
}));