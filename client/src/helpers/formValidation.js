import * as Yup from 'yup';

import { DATE_REGEX } from '@/constants/regs';

export const authValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(5, 'Password must be at least 5 characters')
    .max(50, 'Password must not exceed 50 characters')
});

export const meetupValidationSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required')
    .max(50, 'Title must not exceed 50 characters'),
  desc: Yup.string()
    .max(255, 'Description must not exceed 255 characters')
    .required('Description is required'),
  date: Yup.string()
    .required('Date is required')
    .matches(DATE_REGEX, 'Date must match the format YYYY-MM-DD hh:mm'),
  location: Yup.string()
    .required('Location is required')
    .max(50, 'Location must not exceed 50 characters')
});


