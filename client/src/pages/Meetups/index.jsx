import { Button, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Meetup from '@/components/Meetup';
import { ALERT_CONTENT } from '@/constants/alertsContent';
import ROLES from '@/constants/roles';
import { TIMERS } from '@/constants/timers';
import { checkTimer } from '@/helpers';
import { fetchMeetups } from '@/store/actions/meetupActions';
import { openAlert } from '@/store/slices/alertSlice';
import { setRequestTime } from '@/store/slices/meetupSlice';

import ButtonBox from './styled';


const Meetups = () => {
  const dispatch = useDispatch();

  const { meetups, reqTime } = useSelector(state => state.meetupState);
  const { currentRole } = useSelector(state => state.authState);

  useEffect(() => {
    if (checkTimer(reqTime, TIMERS.meetupUpdate)) {
      dispatch(fetchMeetups());
      dispatch(setRequestTime(new Date().getTime()));
    }
  }, []);

  const handelCreateMeetup = () => {
    dispatch(openAlert(ALERT_CONTENT.cretaeMeetupForm));
  };

  return (
    <>
      <Grid container spacing={4}>
        {meetups.map(meetup => (
          <Meetup key={meetup.id} meetup={meetup} />
        ))}
      </Grid>
      {currentRole === ROLES.admin && (
      <ButtonBox>
        <Button variant="outlined" onClick={handelCreateMeetup}>Create meetup</Button>
      </ButtonBox>
      )}
    </>
  );
};


export default Meetups;
