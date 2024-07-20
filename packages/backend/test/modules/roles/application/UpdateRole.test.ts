import 'reflect-metadata';
import { RoleMother } from '../domain/RoleMother';
import { RoleRepositoryMock } from '../mocks/RoleRepositoryMock';
import { Role } from '../../../../src/modules/Role/domain/Role';
import { RoleName } from '../../../../src/modules/Role/domain/RoleName';

let repository: RoleRepositoryMock;

beforeEach(() => {
  repository = new RoleRepositoryMock();
});

describe('RoleRepository', () => {
  describe('Update Role', () => {
    it('should update an existing role', async () => {
      const role = await RoleMother.random();
      await repository.create(role);

      const updatedRole = new Role(role.id, new RoleName('New role name'), role.state);
      await repository.update(updatedRole);

      const retrievedRole = await repository.getById(role.id.value);
      expect(retrievedRole).toBeDefined();
      expect(retrievedRole?.name.getValue()).toEqual('New role name');

      await repository.assertUpdateHaveBeenCalledWith(updatedRole);
    });
  });
});
