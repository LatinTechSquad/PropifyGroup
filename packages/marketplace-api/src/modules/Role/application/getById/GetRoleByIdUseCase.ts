import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import { IRoleRepository } from '../../domain/IRoleRepository';
import { RoleIdNotExistError } from '../../domain/errors/RoleIdNotExistError';
import { GetRoleByIdResponse } from './GetRoleByIdResponse';
import { IUseCase } from 'src/modules/Shared/application/IUseCase';

@injectable()
export class GetRoleByIdUseCase implements IUseCase<string, GetRoleByIdResponse> {
  private readonly _repository: IRoleRepository;

  constructor(@inject('RoleRepository') repository: IRoleRepository) {
    this._repository = repository;
  }
  public async run(id: string): Promise<GetRoleByIdResponse> {
    const role = await this._repository.getById(id);
    if (role === null) throw new RoleIdNotExistError();

    return new GetRoleByIdResponse(role.id.value, role.name.getValue(), role.state.getValue());
  }
}
