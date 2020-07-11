  
import dotenv from 'dotenv';

dotenv.config();

export const server = {
    port: process.env.PORT || 3000
};

export const database = {
    host : process.env.DB_HOST || 'localhost',
    pass : process.env.DB_PASS || '123',
    user : process.env.DB_USER || 'admin',
    name : process.env.DB_NAME || 'APIKingData'
};

export const auth = {
    secret: process.env.AUTH_SECRET || 'secret',
    salt: process.env.AUTH_SALT_ROUNDS || 10
};