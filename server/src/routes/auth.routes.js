import Router from 'express';

import passport from '../configs/passport.js';
import * as controller from '../controllers/auth.controller.js';
import {
  singInSchema,
  singUpSchema,
  tokenSchema
} from '../helpers/validations.js';
import validateMiddleware from '../middlewares/validateMiddleware.js';

const router = new Router();

router.post(
  '/sign-in',
  validateMiddleware(singInSchema),
  controller.signIn
);
router.post(
  '/sign-up',
  validateMiddleware(singUpSchema),
  controller.signUp
);
router.put(
  '/refresh-token',
  validateMiddleware(tokenSchema),
  controller.updatehToken
);
router.delete(
  '/delete-token',
  validateMiddleware(tokenSchema),
  controller.deleteToken
);
router.get(
  '/google-auth',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);
router.get(
  '/google-redirect',
  passport.authenticate('google', { session: false }),
  controller.googleAuth
);

export default router;
