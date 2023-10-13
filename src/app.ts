require ('dotenv').config();
import express, { Request, Response } from 'express';
import { UserService } from "./user/user.service";
import { UserController } from "./user/user.controller";

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userService = new UserService(prisma);
const userRoutes = new UserController(userService);

app.use('/users', userRoutes.getRouter());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`)
});
