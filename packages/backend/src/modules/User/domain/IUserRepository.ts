import type { User } from './User';

export interface IUserRepository {
  create: (user: User) => Promise<void>;
  update: (user: User) => Promise<void>;
  delete: (id: string) => Promise<void>;
  getAll: () => Promise<User[]>;
  getById: (id: string) => Promise<User | null>;
  getByEmail: (email: string) => Promise<User | null>;
}
