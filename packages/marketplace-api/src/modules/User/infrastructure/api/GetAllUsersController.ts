import 'reflect-metadata';
import { Request, Response, NextFunction } from 'express';
import { IController } from '../../../Shared/infrastructure/api/IController';
import httpStatus from 'http-status';
import { inject, injectable } from 'tsyringe';
import { ResponseBase } from '../../../Shared/application/ResponseBase';
import { GetAllUsersUseCase } from '../../application/getAll/GetAllUsersUseCase';

@injectable()
export class GetAllUsersController implements IController {
  private _getAllUsersUseCase: GetAllUsersUseCase;

  constructor(@inject('GetAllUsersUseCase') getAllUsersUseCase: GetAllUsersUseCase) {
    this._getAllUsersUseCase = getAllUsersUseCase;
  }

  public async run(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const users = await this._getAllUsersUseCase.run();

      const response = new ResponseBase(true, httpStatus.OK, httpStatus[200], undefined, users);

      res.status(httpStatus.OK).send(response);
    } catch (error) {
      next(error);
    }
  }
}
