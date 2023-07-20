import dataSource from '../../typeorm.config';
import { User } from '../entities/User';
interface userError {
  error: string;
  errorCode: string;
  status: number;
}
export class UserService {
  async getUsers(id?: string): Promise<User | User[] | userError> {
    const userRepository = await dataSource.getRepository(User);
    let result: User | User[] | userError;
    if (id) {
      result = (await userRepository.findOneBy({ id })) ?? {
        error: 'User not found',
        errorCode: 'USER_NOT_FOUND',
        status: 404,
      };
    } else {
      result = await userRepository.find();
    }
    return result;
  }
}
