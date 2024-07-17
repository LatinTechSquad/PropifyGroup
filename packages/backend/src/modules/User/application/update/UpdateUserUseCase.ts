import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../domain/IUserRepository';
import { User } from '../../domain/User';
import { UserId } from '../../domain/UserId';
import { UserFirstname } from '../../domain/UserFirstname';
import { UserLastname } from '../../domain/UserLastname';
import { UserEmail } from '../../domain/UserEmail';
import { UserPassword } from '../../domain/UserPassword';
import { UserPhone } from '../../domain/UserPhone';
import { userContainer } from '../../userContainer';
import { IUpdateUserRequest } from 'src/modules/User/application/update/IUpdateUserRequest';
import { IUpdateUserRequest } from './IUpdateUserRequest';
import { IUseCase } from 'src/modules/Shared/application/IUseCase';

@injectable()
export class UpdateUserUseCase implements IUseCase<IUpdateUserRequest, void> {
  private readonly _repository: IUserRepository;

  constructor(@inject('UserRepository') repository: IUserRepository) {
    this._repository = repository;
  }

  public async run(req: IUpdateUserRequest): Promise<void> {
    const user = await this._repository.getById(req.id);
    if (user === null) throw new UserIdNotExistError();
    user.updateFields(new UserName(req.name), new UserState(req.state));
    await this._repository.update(user);
  }
}
