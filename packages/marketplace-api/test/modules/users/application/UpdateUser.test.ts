import 'reflect-metadata';
import { UserMother } from '../domain/UserMother';
import { UserRepositoryMock } from '../mocks/UserRepositoryMock';
import { User } from '../../../../src/modules/User/domain/User';
import { UserPassword } from '../../../../src/modules/User/domain/UserPassword';

let repository: UserRepositoryMock;

beforeEach(() => {
  repository = new UserRepositoryMock();
});

describe('UserRepository', () => {
  describe('Update User', () => {
    it('should update an existing user', async () => {
      const user = await UserMother.random();
      await repository.create(user);

      const updatedUser = new User(user.id, user.firstname, user.lastname, user.email, new UserPassword('newPassword'), user.phone);
      await repository.update(updatedUser);

      const retrievedUser = await repository.getById(user.id.value);
      expect(retrievedUser).toBeDefined();
      expect(retrievedUser?.password.getValue()).toEqual('newPassword');

      await repository.assertUpdateHaveBeenCalledWith(updatedUser);
    });
  });
});
