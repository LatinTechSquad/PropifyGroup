import 'reflect-metadata';
import { NextFunction, Request, Response, Router } from 'express';
import { validateReqSchema } from '../../../Shared/infrastructure/api/validationErrorHandler';
import { IController } from '../../../Shared/infrastructure/api/IController';
import { CreateUserValidator } from '../../application/create/CreateUserValidator';
import { userContainer } from '../../userContainer';
import httpStatus from 'http-status';
import { ResponseBase } from '../../../Shared/application/ResponseBase';
import { UserIdAlreadyExistError } from '../../domain/errors/UserIdAlreadyExistError';
import { UserEmailAlreadyExistError } from '../../domain/errors/UserEmailAlreadyExistError';
import { UpdateUserValidator } from '../../application/update/UpdateUserValidator';

const router = Router();

const createUserController: IController = userContainer.resolve('CreateUserController');
const updateUserController: IController = userContainer.resolve('UpdateUserController');
const deleteUserController: IController = userContainer.resolve('DeleteUserController');
const getUserByIdController: IController = userContainer.resolve('GetUserByIdController');
const getAllUsersController: IController = userContainer.resolve('GetAllUsersController');

router.post('/', CreateUserValidator, validateReqSchema, async (req: Request, res: Response, next: NextFunction) => {
  /**
    #swagger.tags = ['Users']
    #swagger.requestBody = {
        required: true,
        schema: { $ref: "#/components/schemas/CreateUserRequest" }
    }
     */
  await createUserController.run(req, res, next);
});

router.put('/:id', UpdateUserValidator, validateReqSchema, async (req: Request, res: Response, next: NextFunction) => {
  await updateUserController.run(req, res, next);
});

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  await deleteUserController.run(req, res, next);
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  await getUserByIdController.run(req, res, next);
});

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  await getAllUsersController.run(req, res, next);
});
router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof UserEmailAlreadyExistError) {
    res
      .status(400)
      .json(
        new ResponseBase<void>(false, httpStatus.BAD_REQUEST, httpStatus[400], 'Error registering new User', undefined, [
          "User with this 'email' already has been registred",
        ]),
      );
  } else if (err instanceof UserIdAlreadyExistError) {
    res
      .status(400)
      .json(
        new ResponseBase<void>(false, httpStatus.BAD_REQUEST, httpStatus[400], 'Error registering new User', undefined, [
          "User with this 'id' already has been registred",
        ]),
      );
  } else {
    next(err);
  }
});
export default router;
