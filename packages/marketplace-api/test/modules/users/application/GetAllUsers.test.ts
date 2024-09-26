import 'reflect-metadata';
import { UserMother } from '../domain/UserMother';
import { UserRepositoryMock } from '../mocks/UserRepositoryMock';

let repository: UserRepositoryMock;

beforeEach(() => {
  repository = new UserRepositoryMock();
});

describe('UserRepository', () => {
  describe('Get All Users', () => {
    it('should retrieve all users', async () => {
      const user1 = await UserMother.random();
      const user2 = await UserMother.random();
      await repository.create(user1);
      await repository.create(user2);

      const users = await repository.getAll();
      expect(users).toHaveLength(2);
      expect(users[0].id.value).toEqual(user1.id.value);
      expect(users[1].id.value).toEqual(user2.id.value);

      await repository.assertGetAllHaveBeenCalled();
    });
  });
});
