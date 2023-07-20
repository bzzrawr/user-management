import { DataSourceOptions, DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const typeormConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT!),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: Boolean(process.env.DB_SYNC),
  logging: false,
  entities: [
    __dirname + '/src/entities/*{.ts,.js}', // Path to your entities files
  ],
};

const dataSource = new DataSource(typeormConfig);

export default dataSource;
