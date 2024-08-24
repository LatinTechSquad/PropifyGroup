import 'reflect-metadata';
import { IRoleRepository } from '../../../../src/modules/Role/domain/IRoleRepository';
import { RoleMother } from '../domain/RoleMother';
import { EnvironmentArranger } from '../../shared/infrastructure/EnvironmentArranger';
import { testContainer } from '../../shared/testContainer';
import { roleContainer } from '../../../../src/modules/Role/roleContainer';
import { Role } from '../../../../src/modules/Role/domain/Role';
import { RoleName } from '../../../../src/modules/Role/domain/RoleName';

const repository: IRoleRepository = roleContainer.resolve<IRoleRepository>('RoleRepository');
const environmentArranger: EnvironmentArranger = testContainer.resolve('PrismaEnvironmentArranger');

beforeAll(async () => {
  await environmentArranger.arrange();
});

beforeEach(async () => {
  await (await environmentArranger).arrange();
  await (await environmentArranger).close();
});
afterAll(async () => {
  await (await environmentArranger).arrange();
  await (await environmentArranger).close();
});

describe('RoleRepository', () => {
  describe('Create new Role', () => {
    it('should create a new account for the role', async () => {
      const role = await RoleMother.random();
      await repository.create(role);

      const createdRole = await repository.getById(role.id.value);
      expect(createdRole).toBeDefined();
      expect(createdRole?.id.value).toEqual(role.id.value);
    }, 10000);
  });
  describe('Update Role', () => {
    it('should update an existing role', async () => {
      const role = await RoleMother.random();
      await repository.create(role);

      const updatedRole = new Role(role.id, new RoleName('new role name'), role.state);
      await repository.update(updatedRole);

      const retrievedRole = await repository.getById(role.id.value);
      expect(retrievedRole).toBeDefined();
      expect(retrievedRole?.name.getValue()).toEqual('new role name');
    });
  });

  describe('Delete Role', () => {
    it('should delete an existing role', async () => {
      const role = await RoleMother.random();
      await repository.create(role);

      await repository.delete(role.id.value);

      const deletedRole = await repository.getById(role.id.value);
      expect(deletedRole).toBeNull();
    });
  });

  describe('Get Role by ID', () => {
    it('should retrieve a role by its ID', async () => {
      const role = await RoleMother.random();
      await repository.create(role);

      const retrievedRole = await repository.getById(role.id.value);
      expect(retrievedRole).toBeDefined();
      expect(retrievedRole?.id.value).toEqual(role.id.value);
    });
  });

  describe('Get All Roles', () => {
    it('should retrieve all roles', async () => {
      const role1 = await RoleMother.random();
      const role2 = await RoleMother.random();
      await repository.create(role1);
      await repository.create(role2);

      const roles = await repository.getAll();

      const expectedRoleIds = [role1.id.value, role2.id.value];

      const roleIds = roles.map((role) => role.id.value);
      expectedRoleIds.forEach((expectedId) => {
        expect(roleIds).toContain(expectedId);
      });
    });
  });
});
