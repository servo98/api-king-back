import app from './api/api.js';
import http from 'http';
import {server as serverConfig} from './api/utils/config.js';
import database from './api/utils/database.js'

const server = http.createServer(app);

server.listen(serverConfig.port);
server.on('error', onError);
server.on('listening', onListening);

database();


function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof serverConfig.port === 'string'
        ? `Pipe ${serverConfig.port}`
        : `Port ${serverConfig.port}`;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? `pipe ${addr}`
        : `port ${addr.port}`;
    console.info(`Listening on ${bind}`);
}