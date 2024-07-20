import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../domain/IUserRepository';
import { IUseCase } from 'src/modules/Shared/application/IUseCase';
import { UserIdNotExistError } from '../../domain/errors/UserIdNotExistError';

@injectable()
export class DeleteUserUseCase implements IUseCase<string, void> {
  private readonly _repository: IUserRepository;

  constructor(@inject('UserRepository') repository: IUserRepository) {
    this._repository = repository;
  }

  public async run(id: string): Promise<void> {
    const user = await this._repository.getById(id);

    if (user === null) throw new UserIdNotExistError();

    await this._repository.delete(id);
  }
}
