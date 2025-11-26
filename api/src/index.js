import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { config } from './config.js';
import { apiRouter } from './routes/index.js';
import { logger } from './middleware/logger.js';

const app = express();

app.use(logger);
app.use(helmet());
app.use(cors({ origin: '*' }));
app.use(express.json());

app.use(config.apiPrefix, apiRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to GateNet API' });
});

app.listen(config.port, () => {
  console.log(`GateNet API listening on port ${config.port}`);
});
