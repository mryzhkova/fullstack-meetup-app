import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  process.env.DB_NAME || process.env.DB_NAME_PROD,
  process.env.DB_USERNAME || process.env.DB_USERNAME_PROD,
  process.env.DB_PASSWORD || process.env.DB_PASSWORD_PROD,
  {
    dialect: 'postgres',
    host: process.env.DB_HOST || process.env.DB_HOST_PROD,
    ...(process.env.DATABASE_URL && {
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        }
      }
    })
  }
);
