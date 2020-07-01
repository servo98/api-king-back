  
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