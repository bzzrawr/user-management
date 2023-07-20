import dataSource from '../../typeorm.config';
import { User } from '../entities/User';

export class UserService {
  async getUsers(): Promise<User[]> {
    const userRepository = await dataSource.getRepository(User);
    const result = await userRepository.find();
    return result;
  }
}
