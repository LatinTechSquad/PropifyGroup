import 'reflect-metadata';
import { Request, Response, NextFunction } from 'express';
import { IController } from '../../../Shared/infrastructure/api/IController';
import httpStatus from 'http-status';
import { inject, injectable } from 'tsyringe';
import { UpdateUserUseCase } from '../../application/update/UpdateUserUseCase';
import { ResponseBase } from '../../../Shared/application/ResponseBase';

type UpdateUserRequest = Request & {
  body: {
    firstname?: string;
    lastname?: string;
    email?: string;
    password?: string;
    phone?: string;
  };
  params: {
    id: string;
  };
};

@injectable()
export class UpdateUserController implements IController {
  private _updateUserUseCase: UpdateUserUseCase;

  constructor(@inject('UpdateUserUseCase') updateUserUseCase: UpdateUserUseCase) {
    this._updateUserUseCase = updateUserUseCase;
  }

  public async run(req: UpdateUserRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const { firstname, lastname, email, password, phone } = req.body;

      const result = await this._updateUserUseCase.run(id, { firstname, lastname, email, password, phone });

      const response = new ResponseBase<void>(true, httpStatus.OK, httpStatus[200], undefined, result);

      res.status(httpStatus.OK).send(response);
    } catch (error) {
      next(error);
    }
  }
}
