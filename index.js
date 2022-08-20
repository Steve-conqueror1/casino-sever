import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import gamesRoute from './routes/games.js';

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log('Connected to mongoDB');
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('mongoDB disconnected..');
});
app.use(cors())
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong!";
   return res.status(500).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
})

app.use(express.json())

app.use('/api/games', gamesRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('server running on PORT ' + PORT);
  connect();
});
