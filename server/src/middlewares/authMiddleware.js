import { StatusCodes } from 'http-status-codes';

import passport from '../configs/passport.js';

const { UNAUTHORIZED, INTERNAL_SERVER_ERROR } = StatusCodes;

const authMiddleware = (req, res, next) => passport.authenticate(
  'jwt',
  { session: false },
  (error, user) => {
    if (error) {
      return res.status(INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
    if (!user) {
      return res.status(UNAUTHORIZED).json('Incorrect token');
    }
    req.user = user;
    next();
  }
)(req, res, next);

export default authMiddleware;
