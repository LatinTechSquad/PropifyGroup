import 'reflect-metadata';
import { Request, Response, NextFunction } from 'express';
import { IController } from '../../../Shared/infrastructure/api/IController';
import httpStatus from 'http-status';
import { inject, injectable } from 'tsyringe';
import { GetUserByIdUseCase } from '../../application/getById/GetUserByIdUseCase';
import { ResponseBase } from '../../../Shared/application/ResponseBase';

type GetUserByIdRequest = Request & {
  params: {
    id: string;
  };
};

@injectable()
export class GetUserByIdController implements IController {
  private _getUserByIdUseCase: GetUserByIdUseCase;

  constructor(@inject('GetUserByIdUseCase') getUserByIdUseCase: GetUserByIdUseCase) {
    this._getUserByIdUseCase = getUserByIdUseCase;
  }

  public async run(req: GetUserByIdRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;

      const user = await this._getUserByIdUseCase.run(id);

      const response = new ResponseBase(true, httpStatus.OK, httpStatus[200], undefined, user);

      res.status(httpStatus.OK).send(response);
    } catch (error) {
      next(error);
    }
  }
}
