import 'reflect-metadata';
import { faker } from '@faker-js/faker';
import { User } from '../../../../src/modules/User/domain/User';
import { UserEmail } from '../../../../src/modules/User/domain/UserEmail';
import { UserFirstname } from '../../../../src/modules/User/domain/UserFirstname';
import { UserId } from '../../../../src/modules/User/domain/UserId';
import { UserLastname } from '../../../../src/modules/User/domain/UserLastname';
import { UserPassword } from '../../../../src/modules/User/domain/UserPassword';
import { UserPhone } from '../../../../src/modules/User/domain/UserPhone';
import { ICreateUserRequest } from '../../../../src/modules/User/application/create/ICreateUserRequest';

export class UserMother {
  static create(id: UserId, firstname: UserFirstname, lastname: UserLastname, email: UserEmail, password: UserPassword, phone: UserPhone): User {
    return new User(id, firstname, lastname, email, password, phone);
  }

  static async random(): Promise<User> {
    return this.create(
      new UserId(faker.string.uuid()),
      new UserFirstname(faker.person.firstName()),
      new UserLastname(faker.person.lastName()),
      new UserEmail(faker.internet.email()),
      new UserPassword(faker.internet.password()),
      new UserPhone(faker.string.numeric('##########')),
    );
  }
  static async from(request: ICreateUserRequest): Promise<User> {
    return this.create(
      new UserId(request.id),
      new UserFirstname(request.firstname),
      new UserLastname(request.lastname),
      new UserEmail(request.email),
      new UserPassword(request.password),
      new UserPhone(request.phone),
    );
  }
}
