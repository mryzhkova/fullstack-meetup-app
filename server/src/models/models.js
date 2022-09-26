import { DataTypes } from 'sequelize';

import { sequelize } from '../configs/db.js';

export const Meetup = sequelize.define(
  'meetup',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
);

export const User = sequelize.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false,
  }
);

export const Token = sequelize.define(
  'token',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    refreshToken: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false
  }
);

export const ActiveMeetup = sequelize.define(
  'active_meetup',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  },
  {
    timestamps: false
  }
);

User.hasMany(Token);
Token.belongsTo(User);

User.belongsToMany(Meetup, { through: ActiveMeetup });
Meetup.belongsToMany(User, { through: ActiveMeetup });
