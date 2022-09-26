import { ExtractJwt, Strategy } from 'passport-jwt';

import { User } from '../models/models.js';

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.ACCESS_TOKEN_SECRET;

export const jwtStrategy = new Strategy(opts, (jwtPayload, done) => {
  User.findOne({ where: { id: jwtPayload.id } })
    .then(user => {
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    })
    .catch(err => done(err, false));
});
