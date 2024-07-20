import 'reflect-metadata';
import { UserMother } from '../domain/UserMother';
import { UserRepositoryMock } from '../mocks/UserRepositoryMock';

let repository: UserRepositoryMock;

beforeEach(() => {
  repository = new UserRepositoryMock();
});

describe('UserRepository', () => {
  describe('Delete User', () => {
    it('should delete an existing user', async () => {
      const user = await UserMother.random();
      await repository.create(user);

      await repository.delete(user.id);

      const deletedUser = await repository.getById(user.id.value);
      expect(deletedUser).toBeNull();

      await repository.assertDeleteHaveBeenCalledWith(user.id);
    });
  });
});
