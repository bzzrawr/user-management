interface Health {
  health: string;
}
export class HealthService {
  getHealthSync(): Health {
    const result = {
      health: 'OK',
    };

    return result;
  }
  async getHealthAsync(): Promise<Health> {
    const result = {
      health: await Promise.resolve('OK'),
    };

    return result;
  }
}
