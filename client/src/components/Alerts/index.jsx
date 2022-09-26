import React from 'react';
import { useSelector } from 'react-redux';

import AuthForm from '@/components/AuthForm';
import MeetupForm from '@/components/MeetupForm';
import Visitors from '@/components/Visitors';
import { CONTENT_VALUE } from '@/constants/alertsContent';
import { fetchSignIn, fetchSignUp } from '@/store/actions/authActions';
import { fetchCreateMeetup, fetchUpdateMeetup } from '@/store/actions/meetupActions';


const Alerts = () => {
  const { content } = useSelector(state => state.alertState.alertWidow);

  const { currentMeetup } = useSelector(state => state.meetupState);

  const { id, ...defaultMeetup } = currentMeetup;

  switch (content) {
    case CONTENT_VALUE.signIn:
      return (
        <AuthForm
          linkText="Registration"
          btnText="Sign in"
          submitData={fetchSignIn}
        />
      );
    case CONTENT_VALUE.signUp:
      return (
        <AuthForm
          linkText="Authorization"
          btnText="Sign up"
          submitData={fetchSignUp}
        />
      );
    case CONTENT_VALUE.createMeetup:
      return (
        <MeetupForm
          btnText="Create"
          submitData={fetchCreateMeetup}
        />
      );
    case CONTENT_VALUE.udateMeetup:
      return (
        <MeetupForm
          btnText="Update"
          submitData={fetchUpdateMeetup}
          defaultMeetup={defaultMeetup}
          meetupId={currentMeetup.id}
        />
      );
    case CONTENT_VALUE.visitors:
      return <Visitors />;
    default:
      return null;
  }
};

export default Alerts;
