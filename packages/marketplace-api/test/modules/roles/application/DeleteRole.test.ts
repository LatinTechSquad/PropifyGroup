import 'reflect-metadata';
import { RoleMother } from '../domain/RoleMother';
import { RoleRepositoryMock } from '../mocks/RoleRepositoryMock';

let repository: RoleRepositoryMock;

beforeEach(() => {
  repository = new RoleRepositoryMock();
});

describe('RoleRepository', () => {
  describe('Delete Role', () => {
    it('should delete an existing role', async () => {
      const role = await RoleMother.random();
      await repository.create(role);

      await repository.delete(role.id.value);

      const deletedRole = await repository.getById(role.id.value);
      expect(deletedRole).toBeNull();

      await repository.assertDeleteHaveBeenCalledWith(role.id.value);
    });
  });
});
