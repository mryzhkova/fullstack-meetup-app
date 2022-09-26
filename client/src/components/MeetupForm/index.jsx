import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { MEETUP_FIELDS } from '@/constants/formFields';
import { parseTags } from '@/helpers';
import { meetupValidationSchema } from '@/helpers/formValidation';
import { closeAlert } from '@/store/slices/alertSlice';

import ButtonBox from './styled';

const MeetupForm = ({ submitData, btnText, defaultMeetup, meetupId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(meetupValidationSchema),
    defaultValues: defaultMeetup,
  });

  const dispatch = useDispatch();

  const onSubmit = data => {
    const meetup = { ...data, tags: parseTags(data.tags) };
    if (meetupId) {
      dispatch(submitData({ id: meetupId, meetup }));
    } else {
      dispatch(submitData(meetup));
    }
    dispatch(closeAlert());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {MEETUP_FIELDS.map(({ id, label, type, multiline, rows }) => (
        <TextField
          margin="dense"
          label={label}
          type={type}
          multiline={multiline}
          rows={rows}
          fullWidth
          {...register(id)}
          error={!!errors[id]}
          helperText={errors[id]?.message}
        />
      ))}
      <ButtonBox>
        <Button type="submit" color="primary">
          {btnText}
        </Button>
      </ButtonBox>
    </form>
  );
};

export default MeetupForm;
