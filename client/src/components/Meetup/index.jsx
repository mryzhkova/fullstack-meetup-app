import { Grid, CardContent, CardActions, Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ALERT_CONTENT } from '@/constants/alertsContent';
import ROLES from '@/constants/roles';
import { fetchDeleteMeetup } from '@/store/actions/meetupActions';
import { openAlert } from '@/store/slices/alertSlice';
import { setCurrentMeetup } from '@/store/slices/meetupSlice';

import { StyledLink, Description, StyledButton, StyledCard, AdminBox, Title } from './styled';

const Meetup = ({ meetup }) => {
  const dispatch = useDispatch();

  const { token, currentRole } = useSelector(state => state.authState);

  const { title, id, desc } = meetup;

  const handleView = () => {
    if (!token) {
      dispatch(openAlert(ALERT_CONTENT.signInForm));
    }
  };

  const handelCurrentEdit = () => {
    dispatch(setCurrentMeetup(meetup));
    dispatch(openAlert(ALERT_CONTENT.updateMeetupForm));
  };

  const handelDelete = () => {
    dispatch(fetchDeleteMeetup(id));
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <StyledCard>
        <CardContent>
          <Title variant="h5" gutterBottom>
            {title}
          </Title>
          <Description>{desc}</Description>
        </CardContent>
        <CardActions>
          <StyledLink to={token ? `/meetup/${id}` : '/'}>
            <StyledButton onClick={handleView} size="small" color="primary">
              View
            </StyledButton>
          </StyledLink>
          {currentRole === ROLES.admin && (
            <AdminBox>
              <StyledButton onClick={handelCurrentEdit} size="small" color="primary">
                Edit
              </StyledButton>
              <Button onClick={handelDelete} size="small" color="error">
                Delete
              </Button>
            </AdminBox>
          )}
        </CardActions>
      </StyledCard>
    </Grid>
  );
};

export default Meetup;
