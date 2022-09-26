import { createAsyncThunk } from '@reduxjs/toolkit';

import meetupApi from '@/api/meetupApi';
import { openSnackbar } from '@/store/slices/alertSlice';

export const fetchMeetups = createAsyncThunk(
  'meetups/fetchMeetups',
  async () => {
    const { data } = await meetupApi.getMeetups();
    return data;
  }
);

export const fetchCurrentMeetup = createAsyncThunk(
  'meetups/fetchCurrentMeetups',
  async id => {
    const { data } = await meetupApi.getMeetup(id);
    return data;
  }
);

export const fetchCreateMeetup = createAsyncThunk(
  'meetups/fetchCreateMeetup',
  async meetup => {
    const { data } = await meetupApi.createMeetup(meetup);
    return data;
  }
);

export const fetchUpdateMeetup = createAsyncThunk(
  'meetups/fetchUpdateMeetup',
  async ({ id, meetup }) => {
    const { data } = await meetupApi.updateMeetup(id, meetup);
    return data;
  }
);

export const fetchDeleteMeetup = createAsyncThunk(
  'meetups/fetchDeleteMeetup',
  async id => {
    const { data } = await meetupApi.deleteMeetup(id);
    return data;
  }
);

export const fetchAddVisitor = createAsyncThunk(
  'meetups/fetchAddVisitor',
  async (id, { dispatch }) => {
    try {
      const { data } = await meetupApi.addVisitor(id);
      dispatch(openSnackbar({ severity: 'success', text: data }));
    } catch (error) {
      dispatch(openSnackbar({ severity: 'error', text: error.response.data }));
    }
  }
);

