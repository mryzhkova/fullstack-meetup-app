import { createSlice } from '@reduxjs/toolkit';

import {
  fetchCreateMeetup,
  fetchCurrentMeetup,
  fetchDeleteMeetup,
  fetchMeetups,
  fetchUpdateMeetup
} from '@/store/actions/meetupActions';

const initialState = {
  meetups: [],
  currentMeetup: {
    id: null,
    title: '',
    desc: '',
    tags: [],
    date: '',
    location: ''
  },
  reqTime: 0
};

export const meetupSlice = createSlice({
  name: 'meetups',
  initialState,
  reducers: {
    setRequestTime(state, { payload }) {
      state.reqTime = payload;
    },
    setCurrentMeetup(state, { payload }) {
      state.currentMeetup = payload;
    },
    deleteCurrentMeetup(state) {
      state.currentMeetup = {
        id: null,
        title: '',
        desc: '',
        tags: [],
        date: '',
        location: ''
      };
    }
  },
  extraReducers: {
    [fetchMeetups.fulfilled]: (state, { payload }) => {
      state.meetups = payload;
    },
    [fetchCurrentMeetup.fulfilled]: (state, { payload }) => {
      state.currentMeetup = payload;
    },
    [fetchCreateMeetup.fulfilled]: (state, { payload }) => {
      state.meetups.push(payload);
    },
    [fetchUpdateMeetup.fulfilled]: (state, { payload }) => {
      state.meetups = state.meetups.map(meetup => meetup.id === payload.id ? payload : meetup);
    },
    [fetchDeleteMeetup.fulfilled]: (state, { payload }) => {
      state.meetups.forEach((meetup, idx) => {
        if (meetup.id === payload.id) {
          state.meetups.splice(idx, 1);
        }
      });
    }
  }
});

export const { setRequestTime, setCurrentMeetup, deleteCurrentMeetup } = meetupSlice.actions;

export default meetupSlice.reducer;
