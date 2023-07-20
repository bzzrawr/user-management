import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import healthRoutes from './src/routes/healthRoutes';
import userRoutes from './src/routes/userRoutes';
import dataSource from './typeorm.config';

dotenv.config();

//establish database connection
dataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

// create and setup express
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.use('/health', healthRoutes);
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
