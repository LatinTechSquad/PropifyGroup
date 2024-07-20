import 'reflect-metadata';
import { IUserRepository } from '../../../../src/modules/User/domain/IUserRepository';
import { User } from '../../../../src/modules/User/domain/User';
import { UserId } from '../../../../src/modules/User/domain/UserId';

export class UserRepositoryMock implements IUserRepository {
  private createMock: jest.Mock;
  private getMock: jest.Mock;
  private updateMock: jest.Mock;
  private deleteMock: jest.Mock;
  private getAllMock: jest.Mock;
  private users: User[];

  constructor() {
    this.createMock = jest.fn();
    this.getMock = jest.fn();
    this.updateMock = jest.fn();
    this.deleteMock = jest.fn();
    this.getAllMock = jest.fn();
    this.users = [];
  }

  async create(user: User): Promise<void> {
    this.users.push(user);
    this.createMock(user);
    return Promise.resolve();
  }

  async getById(id: string): Promise<User | null> {
    const user = this.users.find((u) => u.id.value === id);
    return user ?? null;
  }

  async getByEmail(email: string): Promise<User | null> {
    const user = this.users.find((u) => u.email.getValue() === email);
    return user ?? null;
  }

  async update(user: User): Promise<void> {
    const index = this.users.findIndex((u) => u.id.value === user.id.value);
    if (index !== -1) {
      this.users[index] = user;
      this.updateMock(user);
    }
    return Promise.resolve();
  }

  async delete(userId: UserId): Promise<void> {
    this.users = this.users.filter((user) => user.id.value !== userId.value);
    this.deleteMock(userId);
    return Promise.resolve();
  }

  async getAll(): Promise<User[]> {
    this.getAllMock();
    return Promise.resolve(this.users);
  }

  assertSaveHaveBeenCalledWith(expected: User): void {
    expect(this.createMock).toHaveBeenCalledWith(expected);
  }

  assertUpdateHaveBeenCalledWith(expected: User): void {
    expect(this.updateMock).toHaveBeenCalledWith(expected);
  }

  assertDeleteHaveBeenCalledWith(expected: UserId): void {
    expect(this.deleteMock).toHaveBeenCalledWith(expected);
  }

  assertGetAllHaveBeenCalled(): void {
    expect(this.getAllMock).toHaveBeenCalled();
  }
}
