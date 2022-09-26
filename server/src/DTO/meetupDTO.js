export const meetupDTO = ({ id, title, desc, tags, date, location }) => ({
  id,
  title,
  desc,
  tags,
  date: date.toJSON().slice(0, 16).replace('T', ' '),
  location
});
