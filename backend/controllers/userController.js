import express from 'express';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

// @desc    Authenticates user & gets token:
// @route   POST /api/users/login
// @access  Public route
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  res.send({ email, password });
});

export { authUser };
