import 'reflect-metadata';
import { IRoleRepository } from '../../../../src/modules/Role/domain/IRoleRepository';
import { Role } from '../../../../src/modules/Role/domain/Role';

export class RoleRepositoryMock implements IRoleRepository {
  private createMock: jest.Mock;
  private getMock: jest.Mock;
  private updateMock: jest.Mock;
  private deleteMock: jest.Mock;
  private getAllMock: jest.Mock;
  private roles: Role[];

  constructor() {
    this.createMock = jest.fn();
    this.getMock = jest.fn();
    this.updateMock = jest.fn();
    this.deleteMock = jest.fn();
    this.getAllMock = jest.fn();
    this.roles = [];
  }

  async create(role: Role): Promise<void> {
    this.roles.push(role);
    this.createMock(role);
    return Promise.resolve();
  }

  async getById(id: string): Promise<Role | null> {
    const role = this.roles.find((r) => r.id.value === id);
    return role ?? null;
  }

  async update(role: Role): Promise<void> {
    const index = this.roles.findIndex((r) => r.id.value === role.id.value);
    if (index !== -1) {
      this.roles[index] = role;
      this.updateMock(role);
    }
    return Promise.resolve();
  }

  async delete(roleId: string): Promise<void> {
    this.roles = this.roles.filter((role) => role.id.value !== roleId);
    this.deleteMock(roleId);
    return Promise.resolve();
  }

  async getAll(): Promise<Role[]> {
    this.getAllMock();
    return Promise.resolve(this.roles);
  }

  assertSaveHaveBeenCalledWith(expected: Role): void {
    expect(this.createMock).toHaveBeenCalledWith(expected);
  }

  assertUpdateHaveBeenCalledWith(expected: Role): void {
    expect(this.updateMock).toHaveBeenCalledWith(expected);
  }

  assertDeleteHaveBeenCalledWith(expected: string): void {
    expect(this.deleteMock).toHaveBeenCalledWith(expected);
  }

  assertGetAllHaveBeenCalled(): void {
    expect(this.getAllMock).toHaveBeenCalled();
  }
}
