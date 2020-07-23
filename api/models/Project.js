import mongoose from 'mongoose';


export default mongoose.model('Project', new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name required']
    },
    slug: {
        type: String,
        required: [true, 'slug required'],
        unique: true
    },
    description: {
        type: String
    },
    dbUser: {
        type: String,
        required: true
    },
    dbPass: {
        type: String,
        required: true
    },
    dbHost: {
        type: String,
        required: true
    },
    dbName: {
        type: String,
        required: true
    },
    models: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Model'
    }],
    routes: [{
        type: String
    }]
}));