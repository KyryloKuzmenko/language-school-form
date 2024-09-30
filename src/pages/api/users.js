import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Обработчик API
const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, language, phone, message } = req.body;

    try {
      // Подключение к MongoDB
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      // Модель данных
      const UserSchema = new mongoose.Schema({
        name: String,
        email: String,
        language: String,
        phone: Number,
        message: String,
      });

      const User = mongoose.model('User', UserSchema);

      const newUser = new User({ name, email, language, phone, message });
      await newUser.save();

      res.status(201).json({ message: 'User data saved successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error saving user data', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

// Экспорт обработчика
export default handler;
