import FullMeetup from '@/pages/FullMeetup';
import Meetups from '@/pages/Meetups';
import NotFoundPage from '@/pages/NotFoundPage';
import SuccessAuth from '@/pages/SuccessAuth';

const ROUTES = [
  { path: '/', element: Meetups, index: true },
  { path: '/meetup/:id', element: FullMeetup },
  { path: '/success-auth', element: SuccessAuth },
  { path: '*', element: NotFoundPage }
];

export default ROUTES;
