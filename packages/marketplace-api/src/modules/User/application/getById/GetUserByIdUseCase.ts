import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../domain/IUserRepository';
import { IUseCase } from 'src/modules/Shared/application/IUseCase';
import { GetUserByIdResponse } from './GetUserByIdResponse';
import { UserIdNotExistError } from '../../domain/errors/UserIdNotExistError';

@injectable()
export class GetUserByIdUseCase implements IUseCase<string, GetUserByIdResponse> {
  private readonly _repository: IUserRepository;

  constructor(@inject('UserRepository') repository: IUserRepository) {
    this._repository = repository;
  }

  public async run(id: string): Promise<GetUserByIdResponse> {
    const user = await this._repository.getById(id);
    if (user === null) throw new UserIdNotExistError();

    return new GetUserByIdResponse(user.id.value, user.firstname.getValue(), user.lastname.getValue(), user.email.getValue(), user.phone.getValue());
  }
}
