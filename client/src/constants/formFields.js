export const MEETUP_FIELDS = [
  { id: 'title', type: 'text', label: 'Title' },
  { id: 'desc', type: 'text', label: 'Description', multiline: true, rows: 4 },
  { id: 'tags', type: 'text', label: 'Tags (separated by commas)' },
  { id: 'date', type: 'text', label: 'Date (YYYY-MM-DD hh:mm)' },
  { id: 'location', type: 'text', label: 'Location' },
];

export const AUTH_FIELDS = [
  { id: 'email', type: 'text', label: 'Email' },
  { id: 'password', type: 'password', label: 'Password' },
];
