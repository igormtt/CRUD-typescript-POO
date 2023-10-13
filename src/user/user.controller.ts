import express, { Request, Response } from 'express';
import { UserService } from './user.service';
import { UserDto } from './User.dto';
import { Router } from 'express';

export class UserController {
  private router: Router;

  constructor(private userService: UserService) {
    this.router = express.Router();
  }

  public initRoutes(): void {
    this.router.post('/create', async (req: Request, res: Response) => {
      const user: UserDto = req.body;

      const createdUser = await this.userService.createUser(user);
      res.status(201).json(createdUser);
    });

    this.router.get('/findUsers', async (req: Request, res: Response) => {
      const users = await this.userService.findAll();
      res.status(200).json(users);
    });

    this.router.get('/getUser/:id', async (req: Request, res: Response) => {
      const id = parseInt(req.params.id);
      const user = await this.userService.findOne(id);
      
      if (user) {
        return res.status(200).json(user);
      } else {
        return res.status(404).json({ message: 'User not found' });
      }
    });

    this.router.patch('/updateUser/:id', async (req: Request, res: Response) => {
      const id = parseInt(req.params.id);
      const user: UserDto = req.body;
      const updatedUser = await this.userService.update(id, user);
      res.status(200).json(updatedUser);
    });

    this.router.delete('/deleteUser/:id', async (req: Request, res: Response) => {
      const id = parseInt(req.params.id);
      await this.userService.remove(id);
      res.status(202).json({ message: 'User deleted' });
    });

  }

  getRouter(): Router {
    this.initRoutes();
    return this.router;
  }

}
