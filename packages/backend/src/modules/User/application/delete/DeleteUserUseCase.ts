import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../domain/IUserRepository';
import { UserId } from '../../domain/UserId';

@injectable()
export class DeleteUserUseCase {
  private readonly _repository: IUserRepository;

  constructor(@inject('UserRepository') repository: IUserRepository) {
    this._repository = repository;
  }

  public async run(id: string): Promise<void> {
    const user = await this._repository.getById(id);

    if (!user) {
      throw new Error('User not found');
    }

    await this._repository.delete(new UserId(id));
  }
}
