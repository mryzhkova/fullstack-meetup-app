import 'dotenv/config.js';
import cors from 'cors';
import express from 'express';
import swaggerUI from 'swagger-ui-express';

import { sequelize } from './configs/db.js';
import passport from './configs/passport.js';
import authRouter from './routes/auth.routes.js';
import meetupRouter from './routes/meetup.routes.js';
import { specs } from './swagger/swagger.js';

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());

sequelize.sync()
  .then(() => {
    console.log('Synced db.');
  })
  .catch(err => {
    console.log(`Failed to sync db: ${err.message}`);
  });

app.use(passport.initialize());

app.use('/api', meetupRouter);
app.use('/api', authRouter);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
