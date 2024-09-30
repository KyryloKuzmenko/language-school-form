import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('MongoDB connection error:', error));

// Model for data
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  language: String,
  phone: Number,
  message: String,
});

const User = mongoose.model('User', UserSchema);

// Route for data delivery
app.post('/api/users', async (req, res) => {
  const { name, email, language, phone, message } = req.body;

  try {
    const newUser = new User({ name, email, language, phone, message });
    await newUser.save();
    res.status(201).json({ message: 'User data saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving user data', error });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
