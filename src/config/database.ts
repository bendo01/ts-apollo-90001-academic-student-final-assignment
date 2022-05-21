import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname+'/.env' });
let is_logging = false;
if (process.env.APP_DATABASE_LOGGING && process.env.APP_DATABASE_LOGGING == 'true') {
    is_logging = true;
}

export const AppDataSource = new DataSource({
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "database": process.env.APP_DATABASE_NAME ? process.env.APP_DATABASE_NAME: "xsia_v10",
    "username": process.env.APP_DATABASE_USERNAME ? process.env.APP_DATABASE_USERNAME: "bendo01",
    "password": process.env.APP_DATABASE_PASSWORD ? process.env.APP_DATABASE_PASSWORD: "talaso",
    "synchronize": false,
    "entities": [__dirname + '/../**/*.entity.{js,ts}'],
    "logging": is_logging,
    "logger": "advanced-console",
    "migrationsTableName": "migration",
    "migrations": ["src/migration/*.ts"],
});