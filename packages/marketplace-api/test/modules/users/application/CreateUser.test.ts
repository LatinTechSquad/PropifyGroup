import 'reflect-metadata';
import { CreateUserUseCase } from '../../../../src/modules/User/application/create/CreateUserUseCase';
import { CreateUserMother } from './CreateUserMother';
import { UserMother } from '../domain/UserMother';
import { UserRepositoryMock } from '../mocks/UserRepositoryMock';

let repository: UserRepositoryMock;
let useCase: CreateUserUseCase;

beforeEach(() => {
  repository = new UserRepositoryMock();
  useCase = new CreateUserUseCase(repository);
});

describe('UserCreator', () => {
  it('should create a valid account for user', async () => {
    const request = await CreateUserMother.random();
    const user = await UserMother.from(request);
    await useCase.run(request);

    await repository.assertSaveHaveBeenCalledWith(user);
  }, 10000);
});
