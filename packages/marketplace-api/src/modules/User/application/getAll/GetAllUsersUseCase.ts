import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../domain/IUserRepository';
import { IUseCase } from 'src/modules/Shared/application/IUseCase';
import { GetAllUsersResponse } from './GetAllUsersResponse';

@injectable()
export class GetAllUsersUseCase implements IUseCase<void, GetAllUsersResponse[]> {
  private readonly _repository: IUserRepository;

  constructor(@inject('UserRepository') repository: IUserRepository) {
    this._repository = repository;
  }

  public async run(): Promise<GetAllUsersResponse[]> {
    const users = await this._repository.getAll();
    if (users !== null) {
      const list: GetAllUsersResponse[] = users.map((user) => ({
        id: user.id.value,
        firstname: user.firstname.getValue(),
        lastname: user.lastname.getValue(),
        email: user.email.getValue(),
        phone: user.phone.getValue(),
      }));
      return list;
    } else {
      return [];
    }
  }
}
