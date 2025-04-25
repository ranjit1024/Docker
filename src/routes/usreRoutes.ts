import express from 'express';
import User from '../models/User';

const router = express.Router();

// Create a new user
router.post('/', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// Get all users
router.get('/user', async (_req, res) => {
  const users = await User.find();
  res.json(users);
});

export default router;
