import { NextFunction, Request, Response, Router } from 'express';
import { IController } from 'src/modules/Shared/infrastructure/api/IController';
import { authContainer } from '../authContainer';
import { NotExistEmailError } from '../../domain/errors/NotExistEmailError';
import { NotMatchedPasswordError } from '../../domain/errors/NotMatchedPassError';
import { ResponseBase } from '../../../Shared/application/ResponseBase';
import httpStatus from 'http-status';
import { loginValidator } from '../../application/login/loginValidator';
import { logoutInvalidator } from '../../application/logout/logoutInvalidator';
import { validateReqSchema } from '../../../Shared/infrastructure/api/validationErrorHandler';

const router = Router();

const controller: IController = authContainer.resolve('AuthController');

router.post('/login', loginValidator, validateReqSchema, async (req: Request, res: Response, next: NextFunction) => {
  /**
    #swagger.tags = ['Authentication']
    #swagger.requestBody = {
        required: true,
        schema: { $ref: "#/components/schemas/LoginRequest" }
    }
     */
  await controller.run(req, res, next);
});

//router.post('/email/verify');
//router.post('/token/refresh');
//router.post('/password/reset');
//router.post('/password/confirm');
//router.post('/password/change');
router.get('/logout', logoutInvalidator, validateReqSchema, async (req: Request, res: Response, next: NextFunction) => {
    /**
    #swagger.tags = ['Authentication']
    #swagger.summary = 'Logout a user and invalidate the token'
    #swagger.responses[204] = { description: 'Logout successful, no content' }
    #swagger.responses[400] = { description: 'Invalid request' }
    */
    try {
      await controller.run(req, res, next);
  
      const response = new ResponseBase<void>(
        true,
        httpStatus.NO_CONTENT,
        httpStatus[204],
        'Logout successfully!!'
      );

      res.status(httpStatus.OK).send(response);
    } catch (err) {
      next(err);
    }
});

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof NotExistEmailError) {
    res
      .status(400)
      .json(
        new ResponseBase<void>(false, httpStatus.BAD_REQUEST, httpStatus[400], 'Error logging User', undefined, [
          'User width this email was not register',
        ]),
      );
  } else if (err instanceof NotMatchedPasswordError) {
    res
      .status(400)
      .json(new ResponseBase<void>(false, httpStatus.BAD_REQUEST, httpStatus[400], 'Error logging User', undefined, ['Incorrect Password']));
  } else {
    next(err);
  }
});

export default router;
