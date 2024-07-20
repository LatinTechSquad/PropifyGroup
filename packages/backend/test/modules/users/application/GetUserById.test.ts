import 'reflect-metadata';
import { UserMother } from '../domain/UserMother';
import { UserRepositoryMock } from '../mocks/UserRepositoryMock';

let repository: UserRepositoryMock;

beforeEach(() => {
  repository = new UserRepositoryMock();
});

describe('UserRepository', () => {
  describe('Get User by ID', () => {
    it('should retrieve a user by its ID', async () => {
      const user = await UserMother.random();
      await repository.create(user);

      const retrievedUser = await repository.getById(user.id.value);
      expect(retrievedUser).toBeDefined();
      expect(retrievedUser?.id.value).toEqual(user.id.value);
    });
  });
});
