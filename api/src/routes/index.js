import { Router } from 'express';
import { healthRouter } from './health.js';

export const apiRouter = Router();

apiRouter.use(healthRouter);

apiRouter.get('/status', (req, res) => {
  res.json({ message: 'API is reachable', version: 'v0.1.0' });
});
