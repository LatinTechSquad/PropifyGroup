import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../domain/IUserRepository';
import { UserFirstname } from '../../domain/UserFirstname';
import { UserLastname } from '../../domain/UserLastname';
import { UserEmail } from '../../domain/UserEmail';
import { UserPhone } from '../../domain/UserPhone';
import { IUseCase } from 'src/modules/Shared/application/IUseCase';
import { UserIdNotExistError } from '../../domain/errors/UserIdNotExistError';
import { IUpdateUserRequest } from './IUpdateUserRequest';

@injectable()
export class UpdateUserUseCase implements IUseCase<IUpdateUserRequest, void> {
  private readonly _repository: IUserRepository;

  constructor(@inject('UserRepository') repository: IUserRepository) {
    this._repository = repository;
  }

  public async run(req: IUpdateUserRequest): Promise<void> {
    const user = await this._repository.getById(req.id);
    if (user === null) throw new UserIdNotExistError();
    user.update(new UserFirstname(req.firstname), new UserLastname(req.lastname), new UserEmail(req.email), new UserPhone(req.phone));
    await this._repository.update(user);
  }
}
