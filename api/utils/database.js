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

db.on('connecting', () => {
    console.log('Conectándose a la base de datos...');
});

db.on('error', (error) => {
    console.error('❌ en MongoDB: ' + error);
    mongoose.disconnect();
});
db.on('connected', () => {
    console.log('✅ Base de datos conectada!');
});
db.once('open', () => {
    console.log('Conexión abierta con MongoDB!');
});
db.on('reconnected', () => {
    console.log('MongoDB reconectado!');
});
db.on('disconnected', () => {
    console.log('MongoDB desconectado!');
    console.log('Reintentando conexión en 5 segundos');
    setTimeout(init,  5000);
});
export default function init() {
    mongoose.connect(...connectionConfig);
}