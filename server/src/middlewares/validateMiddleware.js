import { StatusCodes } from 'http-status-codes';

const validateMiddleware = schema => async (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  console.log(error);
  if (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error.details);
  }
  next();
};

export default validateMiddleware;
