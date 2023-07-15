import { Request, Response } from 'express';
import { HealthService } from '../services/HealthService';

export const getHealthSync = (req: Request, res: Response) => {
  try {
    const healthService = new HealthService();
    const result = healthService.getHealthSync();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      error: 'Internal server error',
    });
  }
};

export const getHealthAsync = async (req: Request, res: Response) => {
  try {
    const healthService = new HealthService();
    const result = await healthService.getHealthAsync();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      error: 'Internal server error',
    });
  }
};
