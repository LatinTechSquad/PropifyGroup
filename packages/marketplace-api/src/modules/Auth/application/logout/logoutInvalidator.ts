import { header } from 'express-validator';

export const logoutInvalidator = [
  header('Authorization')
    .exists()
    .withMessage("The 'Authorization' header is required")
    .matches(/^Bearer\s.+$/)
    .withMessage("Authorization header must follow the format 'Bearer <token>'")
];
