import { Strategy } from 'passport-google-oauth2';

export const GoogleStrategy = new Strategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.MEETUP_API_URL}/google-redirect`,
    passReqToCallback: true
  },
  (request, accessToken, refreshToken, profile, done) => {
    done(null, profile);
  }
);

export const serialize = (user, done) => {
  done(null, user);
};

export const deserialize = (obj, done) => {
  done(null, obj);
};
