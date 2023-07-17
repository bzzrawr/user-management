import { HealthService } from '../services/HealthService';
import { expect } from 'chai';

describe('Test /health', () => {
  describe('Health check on /sync', () => {
    it('health should be okay', () => {
      const healthService = new HealthService();
      const result = healthService.getHealthSync();
      expect(result.health).to.equal('OK');
    });
  });
  describe('Health check on /async', () => {
    it('health should be okay', () => {
      const healthService = new HealthService();
      const result = healthService.getHealthSync();
      expect(result.health).to.equal('OK');
    });
  });
});
