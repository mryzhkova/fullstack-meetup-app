import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import ROUTES from '@/constants/routes';
import { TIMERS } from '@/constants/timers';
import { checkTimer } from '@/helpers';
import Layout from '@/layouts/Layout';
import {
  fetchDeleteToken,
  fetchUpdateToken
} from '@/store/actions/authActions';
import { setReqTime } from '@/store/slices/authSlice';

const App = () => {
  const dispatch = useDispatch();

  const { refreshToken, reqTime } = useSelector(state => state.authState);

  useEffect(() => {
    if (refreshToken) {
      const intevalId = setInterval(() => {
        dispatch(fetchUpdateToken(refreshToken));
      }, TIMERS.minUdateToken);
      return () => {
        clearInterval(intevalId);
      };
    }
  }, [refreshToken]);

  useEffect(() => {
    if (refreshToken && !checkTimer(reqTime, TIMERS.maxUdateToken)) {
      dispatch(fetchUpdateToken(refreshToken));
      dispatch(setReqTime(new Date().getTime()));
    } else if (refreshToken) {
      dispatch(fetchDeleteToken(refreshToken));
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {ROUTES.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
