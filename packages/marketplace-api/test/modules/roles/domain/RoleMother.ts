import 'reflect-metadata';
import { faker } from '@faker-js/faker';
import { Role } from '../../../../src/modules/Role/domain/Role';
import { RoleId } from '../../../../src/modules/Role/domain/RoleId';
import { ICreateRoleRequest } from '../../../../src/modules/Role/application/create/ICreateRoleRequest';
import { RoleState } from '../../../../src/modules/Role/domain/RoleState';
import { RoleName } from '../../../../src/modules/Role/domain/RoleName';

export class RoleMother {
  static create(id: RoleId, name: RoleName, state: RoleState): Role {
    return new Role(id, name, state);
  }

  static async random(): Promise<Role> {
    return this.create(
      new RoleId(faker.string.uuid()),
      new RoleName(faker.word.adjective()),
      new RoleState(faker.helpers.arrayElement(['Active', 'Inactive'])),
    );
  }
  static async from(request: ICreateRoleRequest): Promise<Role> {
    return this.create(new RoleId(request.id), new RoleName(request.name), new RoleState(request.state));
  }
}
