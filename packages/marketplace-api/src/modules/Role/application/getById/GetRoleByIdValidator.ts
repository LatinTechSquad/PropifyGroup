import { param } from 'express-validator';

export const GetRoleByIdValidator = [
  param('id').exists().withMessage("The 'id' field is required").isUUID().withMessage("The 'Id' field must be a valid Uuid").trim().escape(),
];
