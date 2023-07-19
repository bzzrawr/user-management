import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

export const myDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT!),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [
    'src/entities/*.ts', // Path to your entities files
  ],
});
