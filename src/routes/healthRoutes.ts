import { Router } from 'express';
import { getHealthSync, getHealthAsync } from '../controllers/HealthController';

const router = Router();

router.get('/sync', getHealthSync);
router.get('/async', getHealthAsync);

export default router;
