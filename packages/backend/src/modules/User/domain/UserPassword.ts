import { InvalidArgumentError } from '../../Shared/domain/InvalidArgumentError';
import { StringValueObject } from '../../Shared/domain/StringValueObject';

export class UserPassword extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureLengthIsBetween8And100Characters(value);
  }

  private ensureLengthIsBetween8And100Characters(value: string) {
    if (value.length < 8 || value.length > 100) {
      throw new InvalidArgumentError(`The 'Password' property: '${value}' must be between 8 and 100 characters`);
    }
  }
}
