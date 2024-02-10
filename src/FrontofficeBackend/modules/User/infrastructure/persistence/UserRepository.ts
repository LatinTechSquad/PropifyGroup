import { User } from '../../domain/User';
import type { IUserRepository } from '../../domain/IUserRepository';
import { PrismaClient } from '@prisma/client';
import 'reflect-metadata';
import { injectable } from 'tsyringe';

@injectable()
export class UserRepository implements IUserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(userData: User): Promise<void> {
    await this.prisma.user.create({
      data: {
        id: userData.id,
        firstname: userData.firstname,
        lastname: userData.lastname,
        email: userData.email,
        password: userData.password,
      },
    });
  }

  async getById(id: string): Promise<User | null> {
    const userData = await this.prisma.user.findUnique({ where: { id } });
    return userData ? new User(userData.id, userData.firstname, userData.lastname, userData.email, userData.password) : null;
  }

  async getByEmail(email: string): Promise<User | null> {
    const userData = await this.prisma.user.findUnique({ where: { email } });
    return userData ? new User(userData.id, userData.firstname, userData.lastname, userData.email, userData.password) : null;
  }
}
