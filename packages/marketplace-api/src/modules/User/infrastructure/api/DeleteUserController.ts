import 'reflect-metadata';
import { Request, Response, NextFunction } from 'express';
import { IController } from '../../../Shared/infrastructure/api/IController';
import httpStatus from 'http-status';
import { inject, injectable } from 'tsyringe';
import { DeleteUserUseCase } from '../../application/delete/DeleteUserUseCase';
import { ResponseBase } from '../../../Shared/application/ResponseBase';

type DeleteUserRequest = Request & {
  params: {
    id: string;
  };
};

@injectable()
export class DeleteUserController implements IController {
  private _deleteUserUseCase: DeleteUserUseCase;

  constructor(@inject('DeleteUserUseCase') deleteUserUseCase: DeleteUserUseCase) {
    this._deleteUserUseCase = deleteUserUseCase;
  }

  public async run(req: DeleteUserRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;

      await this._deleteUserUseCase.run(id);

      const response = new ResponseBase<void>(true, httpStatus.OK, httpStatus[200], 'User deleted successfully');

      res.status(httpStatus.OK).send(response);
    } catch (error) {
      next(error);
    }
  }
}
