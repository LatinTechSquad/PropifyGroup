import { body } from 'express-validator';

export const CreateRoleValidator = [
  body('id').exists().withMessage("The 'id' field is required").isUUID().withMessage("The 'Id' field must be a valid Uuid").trim().escape(),

  body('name').exists().withMessage("The 'name' field is required").isString().withMessage("The 'name' field must be a valid string").trim().escape(),

  body('state')
    .exists()
    .withMessage("The 'state' field is required")
    .isString()
    .withMessage("The 'state' field must be a valid string")
    .trim()
    .escape(),
];
