import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import movieRoutes from './routes/movies.js';
import bookingRoutes from './routes/bookings.js';
const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json({ limit: '1mb' }));
app.get('/api/health', (req, res) => res.json({ status: 'ok', app: 'IMovies API' }));
app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/bookings', bookingRoutes);
app.use((req, res) => res.status(404).json({ message: 'API route not found.' }));
app.use((err, req, res, next) => { console.error(err); res.status(err.status || 500).json({ message: err.message || 'Internal server error.' }); });
const port = process.env.PORT || 5000;
if (!process.env.JWT_SECRET) { console.error('JWT_SECRET is missing. Copy .env.example to .env and set it.'); process.exit(1); }
try { await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/imovies'); console.log('Connected to MongoDB'); app.listen(port, () => console.log(`IMovies API running at http://localhost:${port}`)); }
catch (error) { console.error('MongoDB connection failed:', error.message); process.exit(1); }
