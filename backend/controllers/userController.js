import express from 'express';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';

// @desc    Authenticates user & gets token:
// @route   POST /api/users/login
// @access  Public route
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Username or password is incorrect');
  }
});

// @desc    Gets user profile
// @route   GET /api/users/profile
// @access  Public route
const getUserProfile = asyncHandler(async (req, res) => {
  res.send('success');
});

export { authUser, getUserProfile };
