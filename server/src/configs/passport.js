import passport from 'passport';

import { deserialize, GoogleStrategy, serialize } from '../strategies/googleStrategy.js';
import { jwtStrategy } from '../strategies/jwtStrategy.js';

passport.use(jwtStrategy);

passport.use(GoogleStrategy);

passport.serializeUser(serialize);

passport.deserializeUser(deserialize);

export default passport;
