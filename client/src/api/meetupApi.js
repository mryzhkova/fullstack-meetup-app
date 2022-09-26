import api from '@/api';

const meetupApi = {
  getMeetup(id) {
    return api.get(`/meetup/${id}`);
  },
  getMeetups() {
    return api.get('/meetups');
  },
  createMeetup(meetup) {
    return api.post('/meetup', meetup);
  },
  updateMeetup(id, meetup) {
    return api.put(`/meetup/${id}`, meetup);
  },
  deleteMeetup(id) {
    return api.delete(`/meetup/${id}`);
  },
  getVisitors(id) {
    return api.get(`/meetup/${id}/visitors`);
  },
  addVisitor(id) {
    return api.post(`/meetup/${id}/visit`);
  }
};

export default meetupApi;
