import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import healthRoutes from './src/routes/healthRoutes';

const app = express();
dotenv.config({ path: __dirname + '/.env' });
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.use('/health', healthRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
