export const parseDate = date => date.slice(0, 16).replaceAll('-', '.').replace('T', ', ');

export const checkTimer = (reqTime, maxTime) => new Date().getTime() - reqTime > maxTime;

export const parseTags = str => {
  if (!str) return [];
  return Array.isArray(str) ? str : str.split(',').map(el => el.trim());
};

export const parseToken = storage => {
  const { authState } = JSON.parse(storage.getItem('persist:root'));
  const { token } = JSON.parse(authState);
  return token;
};

export const getDefaultMeetup = meetup => {
  if (meetup) {
    const { id, ...defaultMeetup } = meetup;
    return defaultMeetup;
  }
  return {};
};
