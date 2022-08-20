import mongoose from 'mongoose';

const GameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  thumbnail: {
    type: String,
    required: true,
  },

  profileUrl: {
    type: String,
    required: true,
  },

  shortDescription: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    default: 'restricted',
  },
});

export default mongoose.model('Game', GameSchema);
