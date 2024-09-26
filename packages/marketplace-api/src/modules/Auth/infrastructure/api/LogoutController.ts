import { IController } from 'src/modules/Shared/infrastructure/api/IController';
import { inject, injectable } from 'tsyringe';
import { LogoutUseCase } from '../../application/logout/LogoutUseCase';
import { ILogoutRequest } from '../../application/logout/ILogoutRequest';
import { NextFunction, Request, Response } from 'express';
import { ResponseBase } from '../../../Shared/application/ResponseBase';
import httpStatus from 'http-status';

@injectable()
export class LogoutController implements IController {
  private _logoutUseCase: LogoutUseCase;

  constructor(@inject('LogoutUseCase') logoutUseCase: LogoutUseCase) {
    this._logoutUseCase = logoutUseCase;
  }

  public async run(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const token = req.headers.authorization?.split(' ')[1];

      if (!token) {
        res.status(httpStatus.BAD_REQUEST).send(new ResponseBase<void>(false, httpStatus.BAD_REQUEST, '400', 'Token is required'));
        return;
      }

      const logoutRequest: ILogoutRequest = { token };

      await this._logoutUseCase.run(logoutRequest);

      const response = new ResponseBase<void>(true, httpStatus.NO_CONTENT, httpStatus[204], 'Logout successfully!!');

      res.status(httpStatus.NO_CONTENT).send(response);
    } catch (err) {
      next(err);
    }
  }
}

