import swaggerJsDoc from 'swagger-jsdoc';

import { meetupPaths as paths } from './paths/meetupPaths.js';
import * as schemas from './schemas/meetupSchemas.js';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Meetup API',
      version: '1.0.0',
      description: 'Meetup API documentation'
    },
    tags: [{ name: 'Meetups' }],
    components: {
      schemas
    },
    paths,
    servers: [
      {
        url: `${process.env.MEETUP_API_URL}`
      }
    ]
  },
  apis: ['./routes/*.js']
};

export const specs = swaggerJsDoc(options);
