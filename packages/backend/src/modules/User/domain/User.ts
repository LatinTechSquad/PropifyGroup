import { AggregateRoot } from '../../Shared/domain/AggregateRoot';
import { UserEmail } from './UserEmail';
import { UserFirstname } from './UserFirstname';
import { UserId } from './UserId';
import { UserLastname } from './UserLastname';
import { UserPassword } from './UserPassword';
import { UserPhone } from './UserPhone';

export class User extends AggregateRoot {
  id: UserId;
  firstname: UserFirstname;
  lastname: UserLastname;
  email: UserEmail;
  password: UserPassword;
  phone: UserPhone;

  constructor(id: UserId, firstname: UserFirstname, lastname: UserLastname, email: UserEmail, hashedPassword: UserPassword, phone: UserPhone) {
    super();
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = hashedPassword;
    this.phone = phone;
  }

  static async create(
    id: UserId,
    firstname: UserFirstname,
    lastname: UserLastname,
    email: UserEmail,
    password: UserPassword,
    phone: UserPhone,
  ): Promise<User> {
    return new User(id, firstname, lastname, email, password, phone);
  }
  async update(firstname: UserFirstname, lastname: UserLastname, email: UserEmail, phone: UserPhone): Promise<void> {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
  }
  async updatePassword(newPassword: string): Promise<void> {
    this.password = await new UserPassword(newPassword);
  }

  toPrimitives(): Record<string, unknown> {
    return {
      id: this.id.value,
      firstname: this.firstname.getValue(),
      lastname: this.lastname.getValue(),
      email: this.email.getValue(),
      phone: this.phone.getValue(),
    };
  }

  static fromPrimitives(data: Record<string, unknown>): User {
    return new User(
      new UserId(data.id as string),
      new UserFirstname(data.firstname as string),
      new UserLastname(data.lastname as string),
      new UserEmail(data.email as string),
      new UserPassword(data.email as string),
      new UserPhone(data.phone as string),
    );
  }
}
