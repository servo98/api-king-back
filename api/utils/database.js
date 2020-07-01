import mongoose from 'mongoose';
import { database } from './config.js';

const db = mongoose.connection;
const connectionConfig = [
    `mongodb+srv://${database.user}:${database.pass}@${database.host}/${database.name}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
];

db.on('connecting', function () {
    console.log('Conectándose a la base de datos...');
});

db.on('error', function (error) {
    console.error('❌ en MongoDB: ' + error);
    mongoose.disconnect();
});
db.on('connected', function () {
    console.log('✅ Base de datos conectada!');
});
db.once('open', function () {
    console.log('Conexión abierta con MongoDB!');
});
db.on('reconnected', function () {
    console.log('MongoDB reconectado!');
});
db.on('disconnected', function () {
    console.log('MongoDB desconectado!');
    mongoose.connect(...connectionConfig);
});
export default function init() {
    mongoose.connect(...connectionConfig);
}