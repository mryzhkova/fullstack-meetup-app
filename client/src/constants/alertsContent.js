export const CONTENT_VALUE = {
  signIn: 'sign-in',
  signUp: 'sign-up',
  visitors: 'visitors',
  createMeetup: 'create meetup',
  udateMeetup: 'update meetup'
};

export const ALERT_CONTENT = {
  signInForm: { title: 'Authorization', content: CONTENT_VALUE.signIn },
  signUpForm: { title: 'Registration', content: CONTENT_VALUE.signUp },
  visitors: { title: 'List of meetup visitors', content: CONTENT_VALUE.visitors },
  cretaeMeetupForm: { title: 'Create meetup', content: CONTENT_VALUE.createMeetup },
  updateMeetupForm: { title: 'Update meetup', content: CONTENT_VALUE.udateMeetup }
};
