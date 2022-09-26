import Router from 'express';

import * as controller from '../controllers/meetup.controller.js';
import {
  createMeetupSchema,
  updateMeetupSchema
} from '../helpers/validations.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import checkRoleMiddleware from '../middlewares/checkRoleMiddleware.js';
import validateMiddleware from '../middlewares/validateMiddleware.js';

const router = new Router();

router.use('/meetup', authMiddleware);

router.post(
  '/meetup',
  checkRoleMiddleware(),
  validateMiddleware(createMeetupSchema),
  controller.createMeetup
);
router.put(
  '/meetup/:id',
  checkRoleMiddleware(),
  validateMiddleware(updateMeetupSchema),
  controller.updateMeetup
);
router.delete(
  '/meetup/:id',
  checkRoleMiddleware(),
  controller.deleteMeetup
);
router.get('/meetups', controller.getMeetups);
router.get('/meetup/:id', controller.getMeetup);
router.post('/meetup/:id/visit', controller.addMeetupVisitor);
router.get('/meetup/:id/visitors', controller.getMeetupVisitors);

export default router;
