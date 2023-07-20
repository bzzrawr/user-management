import { Request, Response } from 'express';
import { UserService } from '../services/UserService';
import dataSource from '../../typeorm.config';
import { User } from '../entities/User';

export class UserController {
  getUsers = async (req: Request, res: Response): Promise<void> => {
    const userRepository = dataSource.getRepository(User);
    try {
      let user = req.params.id
        ? await userRepository.findOneBy({ id: req.params.id })
        : await userRepository.find();

      if (!user) {
        res
          .status(404)
          .json({ error: 'User not found', errorCode: 'USER_NOT_FOUND' });
      } else {
        res.json(user);
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
}
