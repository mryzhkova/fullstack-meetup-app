import Joi from 'joi';

import { DATE_REGEX } from '../constants/regs.js';

export const createMeetupSchema = Joi.object({
  title: Joi.string().max(50).required(),
  desc: Joi.string().max(255).required(),
  tags: Joi.array().items(Joi.string()).optional(),
  date: Joi.string().regex(DATE_REGEX).required(),
  location: Joi.string().max(50).required()
});

export const updateMeetupSchema = Joi.object({
  title: Joi.string().max(50).optional(),
  desc: Joi.string().max(255).optional(),
  tags: Joi.array().items(Joi.string()).optional(),
  date: Joi.string().regex(DATE_REGEX).optional(),
  location: Joi.string().max(50).optional()
});

export const singUpSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(5).max(50).required()
});

export const singInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(5).max(50).required()
});

export const tokenSchema = Joi.object({
  refreshToken: Joi.string().required(),
});
