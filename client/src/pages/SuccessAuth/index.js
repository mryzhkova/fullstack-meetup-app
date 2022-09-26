import queryString from 'query-string';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { closeAlert } from '@/store/slices/alertSlice';
import { setReqTime, setTokens } from '@/store/slices/authSlice';

const SuccessAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const query = queryString.parse(window.location.search);
    if (query) {
      dispatch(setTokens(query));
      dispatch(setReqTime(new Date().getTime()));
    }
    dispatch(closeAlert());
    const timeoutId = setTimeout(() => {
      window.opener.location.reload();
      window.close();
    });
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return null;
};

export default SuccessAuth;
