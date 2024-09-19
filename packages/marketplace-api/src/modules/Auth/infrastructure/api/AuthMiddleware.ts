import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import { ResponseBase } from '../../../Shared/application/ResponseBase';
import { User } from '../../../User/domain/User';

interface AuthRequest extends Request {
  user?: User;
}
const JWT_SECRET = 'thiismysecretkey';

export function authMiddleware(req: AuthRequest, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        const response = new ResponseBase(false, httpStatus.UNAUTHORIZED, httpStatus[401], 'Token verification failed', undefined, [
          'Token verification failed',
        ]);
        return res.status(httpStatus.UNAUTHORIZED).json(response);
      }

      req.user = decoded as User;

      next();
    });
  } else {
    const response = new ResponseBase(false, httpStatus.UNAUTHORIZED, httpStatus[401], 'Authorization header missing or malformed', undefined, [
      'Authorization header missing or malformed',
    ]);
    res.status(httpStatus.UNAUTHORIZED).json(response);
  }
}
