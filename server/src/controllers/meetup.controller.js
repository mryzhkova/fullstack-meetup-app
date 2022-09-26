import { StatusCodes } from 'http-status-codes';

import { meetupDTO } from '../DTO/meetupDTO.js';
import { userDTO } from '../DTO/userDTO.js';
import { Meetup, ActiveMeetup, User } from '../models/models.js';

export const createMeetup = async (req, res) => {
  try {
    const { title, desc, date, location, tags } = req.body;
    const newMeetup = await Meetup.create({
      title,
      desc,
      tags,
      date,
      location
    });
    res.status(StatusCodes.CREATED).json(meetupDTO(newMeetup));
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
};

export const getMeetups = async (req, res) => {
  try {
    const meetups = await Meetup.findAll();
    res.status(StatusCodes.OK).json(meetups.map(meetupDTO));
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
};

export const getMeetup = async (req, res) => {
  try {
    const { id } = req.params;
    const meetup = await Meetup.findOne({ where: { id } });
    if (!meetup) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json('Meetup does not exist');
    }
    res.status(StatusCodes.OK).json(meetupDTO(meetup));
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
};

export const updateMeetup = async (req, res) => {
  try {
    const { id } = req.params;
    const meetup = await Meetup.findOne({ where: { id } });
    if (!meetup) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json('Meetup does not exist');
    }
    await Meetup.update(req.body, { where: { id } });
    const newMeetup = await Meetup.findOne({ where: { id } });
    res.status(StatusCodes.OK).json(meetupDTO(newMeetup));
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
};

export const deleteMeetup = async (req, res) => {
  try {
    const { id } = req.params;
    const meetup = await Meetup.findOne({ where: { id } });
    if (!meetup) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json('Meetup does not exist');
    }
    await Meetup.destroy({ where: { id } });
    res.status(StatusCodes.OK).json(meetupDTO(meetup));
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
};

export const addMeetupVisitor = async (req, res) => {
  try {
    const userId = req.user.id;
    const meetupId = req.params.id;
    const meetup = await Meetup.findOne({ where: { id: meetupId } });
    if (!meetup) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json('Meetup does not exist');
    }
    const candidate = await ActiveMeetup.findOne({
      where: { meetupId, userId }
    });
    if (candidate) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json('The user is already a visitor!');
    }
    await ActiveMeetup.create({ meetupId, userId });
    res
      .status(StatusCodes.CREATED)
      .json('Registration for the meetup was successful!');
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
};

export const getMeetupVisitors = async (req, res) => {
  try {
    const { id } = req.params;
    const meetup = await Meetup.findOne({ where: { id } });
    if (!meetup) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json('Meetup does not exist');
    }
    const visitors = await User.findAll({
      include: [
        {
          model: Meetup,
          where: { id }
        }
      ]
    });
    res.status(StatusCodes.OK).json(visitors.map(userDTO));
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
};
