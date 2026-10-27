import mongoose from 'mongoose';
const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  duration: { type: String, required: true },
  rating: { type: Number, default: 8.0 },
  language: { type: String, default: 'English' },
  description: { type: String, default: 'An unforgettable cinematic experience.' },
  posterUrl: { type: String, required: true },
  showtimes: { type: [String], default: ['10:00 AM', '1:30 PM', '6:00 PM', '9:15 PM'] }
}, { timestamps: true });
export default mongoose.model('Movie', movieSchema);
