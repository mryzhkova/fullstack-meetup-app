import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { ALERT_CONTENT } from '@/constants/alertsContent';
import { authValidationSchema } from '@/helpers/formValidation';
import { openAlert } from '@/store/slices/alertSlice';

import { ButtonsWrapper, CustomButton, GoogleButton } from './styled';
import { AUTH_FIELDS } from '@/constants/formFields';


const AuthForm = ({ submitData, btnText, linkText }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(authValidationSchema)
  });

  const dispatch = useDispatch();


  const onSubmit = data => {
    dispatch(submitData(data));
  };

  const handelChengeForm = () => {
    if (linkText === 'Registration') {
      dispatch(openAlert(ALERT_CONTENT.signUpForm));
    } else {
      dispatch(openAlert(ALERT_CONTENT.signInForm));
    }
  };

  const handleGoogleLogin = async () => {
    window.open(
      `${process.env.REACT_APP_API_URL}/google-auth`,
      '_blank',
      'width=500,height=550'
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {AUTH_FIELDS.map(({ id, label, type }) => (
        <TextField
          margin="dense"
          label={label}
          type={type}
          fullWidth
          {...register(id)}
          error={!!errors[id]}
          helperText={errors[id]?.message}
        />
      ))}
      <GoogleButton variant="outlined" onClick={handleGoogleLogin}>
        Sign in with Google
      </GoogleButton>
      <ButtonsWrapper>
        <CustomButton onClick={handelChengeForm}>{linkText}</CustomButton>
        <Button type="submit" color="primary">{btnText}</Button>
      </ButtonsWrapper>
    </form>
  );
};

export default AuthForm;
