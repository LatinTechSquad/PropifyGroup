import { faker } from '@faker-js/faker';
import { ICreateRoleRequest } from '../../../../src/modules/Role/application/create/ICreateRoleRequest';
import { RoleId } from '../../../../src/modules/Role/domain/RoleId';
import { RoleState } from '../../../../src/modules/Role/domain/RoleState';
import { RoleName } from '../../../../src/modules/Role/domain/RoleName';

export class CreateRoleMother {
  static create(id: RoleId, name: RoleName, state: RoleState): ICreateRoleRequest {
    return {
      id: id.value,
      name: name.getValue(),
      state: state.getValue(),
    };
  }
  static async random(): Promise<ICreateRoleRequest> {
    return this.create(
      new RoleId(faker.string.uuid()),
      new RoleName(faker.word.adjective()),
      new RoleState(faker.helpers.arrayElement(['Active', 'Inactive'])),
    );
  }
}
