import { Role } from '../../domain/Role';
import type { IRoleRepository } from '../../domain/IRoleRepository';
import { PrismaClient } from '@prisma/client';
import 'reflect-metadata';
import { injectable } from 'tsyringe';
import { RoleId } from '../../domain/RoleId';
import { RoleName } from '../../domain/RoleName';
import { RoleState } from '../../domain/RoleState';

@injectable()
export class RoleRepository implements IRoleRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(roleData: Role): Promise<void> {
    await this.prisma.role.create({
      data: {
        id: roleData.id.value,
        name: roleData.name.toString(),
        state: roleData.state.toString(),
      },
    });
  }

  async update(roleData: Role): Promise<void> {
    await this.prisma.role.update({
      where: { id: roleData.id.value },
      data: {
        name: roleData.name.toString(),
        state: roleData.state.toString(),
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.role.delete({ where: { id } });
  }

  async getById(id: string): Promise<Role | null> {
    const roleData = await this.prisma.role.findUnique({ where: { id } });
    return roleData ? new Role(new RoleId(roleData.id), new RoleName(roleData.name), new RoleState(roleData.state)) : null;
  }

  async getAll(): Promise<Role[]> {
    const rolesData = await this.prisma.role.findMany();
    return rolesData.map(
      (role: { id: string; name: string; state: string }) => new Role(new RoleId(role.id), new RoleName(role.name), new RoleState(role.state)),
    );
  }
}
