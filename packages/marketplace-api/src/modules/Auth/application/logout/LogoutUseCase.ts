import { inject, injectable } from 'tsyringe';
import { IUserTokenRepository } from '../../domain/IUserTokenRepository';
import { TokenNotFoundError }  from '../../domain/errors/TokenNotFoundError';
import { ILogoutRequest } from '../logout/ILogoutRequest';

@injectable()
export class LogoutUseCase {
  private readonly _tokenRepository: IUserTokenRepository;

  constructor(@inject('UserTokenRepository') tokenRepository: IUserTokenRepository) {
    this._tokenRepository = tokenRepository;
  }

  public async run(req: ILogoutRequest): Promise<void> {
    const { token } = req;

    if (!token) {
      throw new TokenNotFoundError();
    }

    await this._tokenRepository.revokeToken(req.token);
  }
}
