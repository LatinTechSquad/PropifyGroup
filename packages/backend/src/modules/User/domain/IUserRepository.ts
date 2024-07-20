import type { User } from './User';
import { UserId } from './UserId';

export interface IUserRepository {
  create: (user: User) => Promise<void>;
  update: (user: User) => Promise<void>;
  delete: (user: UserId) => Promise<void>;
  getAll: () => Promise<User[]>;
  getById: (id: string) => Promise<User | null>;
  getByEmail: (email: string) => Promise<User | null>;
}
