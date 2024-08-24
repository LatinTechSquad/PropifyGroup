import 'reflect-metadata';
import { RoleMother } from '../domain/RoleMother';
import { RoleRepositoryMock } from '../mocks/RoleRepositoryMock';

let repository: RoleRepositoryMock;

beforeEach(() => {
  repository = new RoleRepositoryMock();
});

describe('RoleRepository', () => {
  describe('Get Role by ID', () => {
    it('should retrieve a role by its ID', async () => {
      const role = await RoleMother.random();
      await repository.create(role);

      const retrievedRole = await repository.getById(role.id.value);
      expect(retrievedRole).toBeDefined();
      expect(retrievedRole?.id.value).toEqual(role.id.value);
    });
  });
});
