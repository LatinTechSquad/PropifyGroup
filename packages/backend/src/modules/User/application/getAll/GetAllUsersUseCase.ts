import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../domain/IUserRepository';
import { User } from '../../domain/User';

@injectable()
export class GetAllUsersUseCase {
  private readonly _repository: IUserRepository;

  constructor(@inject('UserRepository') repository: IUserRepository) {
    this._repository = repository;
  }

  public async run(): Promise<User[]> {
    return await this._repository.getAll();
  }
}
