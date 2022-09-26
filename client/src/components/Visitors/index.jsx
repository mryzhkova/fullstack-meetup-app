import { List, ListItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import meetupApi from '@/api/meetupApi';

const Visitors = () => {
  const [visitors, setVisitors] = useState([]);

  const { id } = useSelector(state => state.meetupState.currentMeetup);

  useEffect(() => {
    meetupApi.getVisitors(id).then(({ data }) => {
      setVisitors(data);
    });
  }, []);

  return (
    <List>
      {visitors.length === 0
        ? 'No visitors'
        : visitors.map(({ email }) => <ListItem key={email}>{email}</ListItem>)}
    </List>
  );
};

export default Visitors;
