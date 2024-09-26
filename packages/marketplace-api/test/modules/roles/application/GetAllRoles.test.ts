import 'reflect-metadata';
import { RoleMother } from '../domain/RoleMother';
import { RoleRepositoryMock } from '../mocks/RoleRepositoryMock';

let repository: RoleRepositoryMock;

beforeEach(() => {
  repository = new RoleRepositoryMock();
});

describe('RoleRepository', () => {
  describe('Get All Roles', () => {
    it('should retrieve all roles', async () => {
      const role1 = await RoleMother.random();
      const role2 = await RoleMother.random();
      await repository.create(role1);
      await repository.create(role2);

      const roles = await repository.getAll();
      expect(roles).toHaveLength(2);
      expect(roles[0].id.value).toEqual(role1.id.value);
      expect(roles[1].id.value).toEqual(role2.id.value);

      await repository.assertGetAllHaveBeenCalled();
    });
  });
});
