import { URLSearchParams } from 'url';

import bcrypt from 'bcryptjs';
import { StatusCodes } from 'http-status-codes';

import { PASS_HASH } from '../constants/constants.js';
import { roles } from '../constants/roles.js';
import {
  decodeToken,
  generateAccessToken,
  generateRefreshToken
} from '../helpers/tokenHelpers.js';
import { User, Token } from '../models/models.js';

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json('Incorrect email!');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json('Incorrect password!');
    }
    const accessToken = await generateAccessToken(user);
    const refreshToken = await generateRefreshToken(user);

    await Token.create({ refreshToken, userId: user.id });
    return res
      .status(StatusCodes.OK)
      .json({ accessToken, refreshToken });
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
};

export const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json('This email is already occupied!');
    }
    const hashedPass = await bcrypt.hash(password, PASS_HASH);
    await User.create({
      email,
      password: hashedPass,
      role: roles.USER
    });
    res.status(StatusCodes.CREATED).json('Registration was successful!');
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
};

export const updatehToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    const token = await Token.findOne({ where: { refreshToken } });
    if (!token) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json('Token not found');
    }
    const { id } = decodeToken(token.refreshToken);
    const user = await User.findOne({ where: { id } });

    const accessToken = await generateAccessToken(user);
    const newRefToken = await generateRefreshToken(user);

    await Token.update({ refreshToken: newRefToken }, { where: { userId: id } });

    return res
      .status(StatusCodes.OK)
      .json({ accessToken, refreshToken: newRefToken });
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
};

export const deleteToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    const token = await Token.findOne({ where: { refreshToken } });
    if (!token) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json('Token not found');
    }
    await Token.destroy({ where: { id: token.id } });
    return res.status(StatusCodes.NO_CONTENT).json();
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
};

export const googleAuth = async (req, res) => {
  try {
    const { user } = req;
    const [candidate] = await User.findOrCreate({
      where: { email: user._json.email },
      defaults: { role: roles.USER }
    });

    const accessToken = await generateAccessToken(candidate);
    const refreshToken = await generateRefreshToken(candidate);

    await Token.create({ refreshToken, userId: candidate.id });

    const urlParameters = new URLSearchParams({
      accessToken,
      refreshToken
    });
    return res.redirect(`${process.env.CLIENT_URL}/success-auth?${urlParameters}`);
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
};
