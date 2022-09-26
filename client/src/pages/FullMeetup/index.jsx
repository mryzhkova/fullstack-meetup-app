import { AccessTime, LocationOnOutlined } from '@mui/icons-material';
import { Button, Chip, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ALERT_CONTENT } from '@/constants/alertsContent';
import { parseDate } from '@/helpers';
import UnauthorizPage from '@/pages/UnauthorizPage';
import {
  fetchAddVisitor,
  fetchCurrentMeetup
} from '@/store/actions/meetupActions';
import { openAlert } from '@/store/slices/alertSlice';

import {
  ButtonsWrapper,
  Description,
  DisplayBox,
  IconText,
  StyledBox,
  Title
} from './styled';

const FullMeetup = () => {
  const dispatch = useDispatch();

  const { token } = useSelector(state => state.authState);
  const { currentMeetup } = useSelector(state => state.meetupState);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCurrentMeetup(id));
  }, []);

  const handleShowVisitors = () => {
    dispatch(openAlert(ALERT_CONTENT.visitors));
  };

  const handleVisit = () => {
    dispatch(fetchAddVisitor(id));
  };

  if (!token) return <UnauthorizPage />;

  const { title, desc, location, date, tags } = currentMeetup;

  return (
    <>
      <Title variant="h3">{title}</Title>
      <DisplayBox>
        <AccessTime />
        <IconText>{parseDate(date)}</IconText>
      </DisplayBox>
      <DisplayBox>
        <LocationOnOutlined />
        <IconText>{location}</IconText>
      </DisplayBox>
      <Description>{desc}</Description>
      <StyledBox>
        {tags.length !== 0 && (
          <>
            <Typography>Tags:</Typography>
            {tags.map(tag => (
              <Chip key={tag} label={tag} size="small" variant="outlined" />
            ))}
          </>
        )}
      </StyledBox>
      <ButtonsWrapper>
        <Button variant="outlined" onClick={handleVisit}>
          Visit
        </Button>
        <Button variant="outlined" onClick={handleShowVisitors}>
          Show Visitors
        </Button>
      </ButtonsWrapper>
    </>
  );
};

export default FullMeetup;
