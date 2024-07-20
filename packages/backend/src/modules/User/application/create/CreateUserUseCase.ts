import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../domain/IUserRepository';
import { UserIdAlreadyExistError } from '../../domain/errors/UserIdAlreadyExistError';
import { UserEmailAlreadyExistError } from '../../domain/errors/UserEmailAlreadyExistError';
import { User } from '../../domain/User';
import { UserId } from '../../domain/UserId';
import { UserFirstname } from '../../domain/UserFirstname';
import { UserLastname } from '../../domain/UserLastname';
import { UserEmail } from '../../domain/UserEmail';
import { UserPassword } from '../../domain/UserPassword';
import { UserPhone } from '../../domain/UserPhone';
import { ICreateUserRequest } from './ICreateUserRequest';

@injectable()
export class CreateUserUseCase {
  private readonly _repository: IUserRepository;

  constructor(@inject('UserRepository') repository: IUserRepository) {
    this._repository = repository;
  }
  public async run(req: ICreateUserRequest): Promise<void> {
    const checkUserByEmail = await this._repository.getByEmail(req.email);
    if (checkUserByEmail) throw new UserEmailAlreadyExistError();

    const checkUserById = await this._repository.getById(req.id);
    if (checkUserById) throw new UserIdAlreadyExistError();

    const user = await User.create(
      new UserId(req.id),
      new UserFirstname(req.firstname),
      new UserLastname(req.lastname),
      new UserEmail(req.email),
      new UserPassword(req.password),
      new UserPhone(req.phone),
    );
    await this._repository.create(user);
  }
}
