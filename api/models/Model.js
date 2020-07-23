import mongoose from 'mongoose';

const types = {
    'string': String,
    'number': Number,
    'date': Date,
    'boolean': Boolean,
    'objectId': mongoose.Schema.Types.ObjectId
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
            enum: Object.keys(types),
            required: [true, 'Tipo de campo obligatorio']
        },
        required: {
            type: Boolean,
            default: false
        },
        distinct: {
            type: Boolean,
            default: false
        }
    }]
}));