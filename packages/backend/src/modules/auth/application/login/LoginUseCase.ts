import jwt from 'jsonwebtoken';
import argon2 from 'argon2';
import { inject, injectable } from 'tsyringe';
import { IAuthRepository } from '../../domain/IAuthRepository';
import { NotMatchedPasswordError } from '../../domain/errors/NotMatchedPassError';
import { NotExistEmailError } from '../../domain/errors/NotExistEmailError';
import { ILoginRequest } from './ILoginRequest';
import { LoginDTO } from './LoginDto';
import { IUserTokenRepository } from '../../domain/IUserTokenRepository';

@injectable()
export class LoginUseCase {
  private readonly _repository: IAuthRepository;
  private readonly _tokenRepository: IUserTokenRepository;
  private readonly _jwtSecret: string = 'thiismysecretkey';

  constructor(@inject('AuthRepository') authRepository: IAuthRepository, @inject('UserTokenRepository') tokenRepository: IUserTokenRepository) {
    this._repository = authRepository;
    this._tokenRepository = tokenRepository;
  }

  public async run(req: ILoginRequest): Promise<LoginDTO> {
    const user = await this._repository.getByEmail(req.email);
    if (!user) throw new NotExistEmailError();

    const isMatched = await argon2.verify(user.password, req.password);
    if (!isMatched) throw new NotMatchedPasswordError();

    const claims = {
      sub: user.id,
      name: `${user.firstname} ${user.lastname}`,
      roles: user.role_id,
    };

    const token = jwt.sign(claims, this._jwtSecret, { expiresIn: '1h' });
    await this._tokenRepository.createToken(user.id, token, new Date(Date.now() + 3600 * 1000));

    return new LoginDTO(user.id, token);
  }
}
