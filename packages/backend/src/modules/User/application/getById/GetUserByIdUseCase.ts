import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../domain/IUserRepository';
import { User } from '../../domain/User';
import { UserId } from '../../domain/UserId';

@injectable()
export class GetUserByIdUseCase {
  private readonly _repository: IUserRepository;

  constructor(@inject('UserRepository') repository: IUserRepository) {
    this._repository = repository;
  }

  public async run(id: string): Promise<User | null> {
    return await this._repository.getById(id);
  }
}
