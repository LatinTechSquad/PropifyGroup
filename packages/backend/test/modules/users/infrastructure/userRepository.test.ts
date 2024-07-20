import 'reflect-metadata';
import { IUserRepository } from '../../../../src/modules/User/domain/IUserRepository';
import { UserMother } from '../domain/UserMother';
import { EnvironmentArranger } from '../../shared/infrastructure/EnvironmentArranger';
import { testContainer } from '../../shared/testContainer';
import { userContainer } from '../../../../src/modules/User/userContainer';
import { User } from '../../../../src/modules/User/domain/User';
import { UserPassword } from '../../../../src/modules/User/domain/UserPassword';

const repository: IUserRepository = userContainer.resolve<IUserRepository>('UserRepository');
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

describe('UserRepository', () => {
  describe('Create new User', () => {
    it('should create a new account for the user', async () => {
      const user = await UserMother.random();
      await repository.create(user);

      const createdUser = await repository.getById(user.id.value);
      expect(createdUser).toBeDefined();
      expect(createdUser?.id.value).toEqual(user.id.value);
    }, 10000);
  });
  describe('Update User', () => {
    it('should update an existing user', async () => {
      const user = await UserMother.random();
      await repository.create(user);

      const updatedUser = new User(user.id, user.firstname, user.lastname, user.email, new UserPassword('newPassword'), user.phone);
      await repository.update(updatedUser);

      const retrievedUser = await repository.getById(user.id.value);
      expect(retrievedUser).toBeDefined();
      expect(retrievedUser?.password.getValue()).toEqual('newPassword');
    });
  });

  describe('Delete User', () => {
    it('should delete an existing user', async () => {
      const user = await UserMother.random();
      await repository.create(user);

      await repository.delete(user.id);

      const deletedUser = await repository.getById(user.id.value);
      expect(deletedUser).toBeNull();
    });
  });

  describe('Get User by ID', () => {
    it('should retrieve a user by its ID', async () => {
      const user = await UserMother.random();
      await repository.create(user);

      const retrievedUser = await repository.getById(user.id.value);
      expect(retrievedUser).toBeDefined();
      expect(retrievedUser?.id.value).toEqual(user.id.value);
    });
  });

  describe('Get All Users', () => {
    it('should retrieve all users', async () => {
      const user1 = await UserMother.random();
      const user2 = await UserMother.random();
      await repository.create(user1);
      await repository.create(user2);

      const users = await repository.getAll();
      expect(users).toHaveLength(3);
      expect(users[0].id.value).toEqual(user1.id.value);
      expect(users[1].id.value).toEqual(user2.id.value);
    });
  });
});
