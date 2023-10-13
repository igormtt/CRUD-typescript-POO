import { PrismaClient } from '@prisma/client';
import { UserDto } from './User.dto';
import bcrypt from 'bcrypt';
import { Strategy as LocalStrategy } from 'passport-local';
import { Passport } from 'passport';

export class UserService {
  constructor(private prisma: PrismaClient) {}

  async createUser(body: UserDto) {

    const user = {
      name: body.name,
      email: body.email,
      password: await this.hashPassword(body.password),
      address: body.address
    }

    return await this.prisma.user.create({
     data: user 
    });
  }

  async hashPassword(password: string) {
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt);
    return hash;
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.user.findUniqueOrThrow({
      where: {
        id
      }
    });
  }

  async update(id: number, userDto: UserDto) {
    return await this.prisma.user.update({
      data: userDto,
      where: {
        id
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.user.delete({
      where: {
        id
      },
    });
  }
  
}
