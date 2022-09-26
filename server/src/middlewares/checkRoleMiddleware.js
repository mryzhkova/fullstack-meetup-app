import { StatusCodes } from 'http-status-codes';

import { roles } from '../constants/roles.js';

const checkRoleMiddleware = () => async (req, res, next) => {
  if (req.user.role !== roles.ADMIN) {
    return res.status(StatusCodes.FORBIDDEN).json('You don\'t have enough permissions');
  }
  next();
};

export default checkRoleMiddleware;
