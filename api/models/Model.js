import mongoose from 'mongoose';

const types = {
    String,
    Number,
    Date,
    Boolean,
    ObjectId
}

export default mongoose.model('Model', new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nombre de modelo obligatorio']
    },
    fields: [{
        name: {
            type: String,
            required: [true, 'Nombre de campo obligatorio']
        },
        type: {
            type: String,
            required: [true, 'Tipo de campo obligatorio'],
            unique: true,
        },
        unique: {
            type: Boolean,
        }
    }]
}));