import { Router } from 'express';
import crypto from 'node:crypto';
import Booking from '../models/Booking.js';
import Movie from '../models/Movie.js';
import auth from '../middleware/auth.js';
const router = Router();
router.get('/occupied', async (req, res, next) => {
  try { const { movie, date, showtime } = req.query; if (!movie || !date || !showtime) return res.status(400).json({ message: 'Movie, date and showtime are required.' }); const rows = await Booking.find({ movie, showDate: date, showtime }).select('seats'); res.json(rows.flatMap(r => r.seats)); }
  catch (e) { next(e); }
});
router.post('/', auth, async (req, res, next) => {
  try {
    const { movie, showDate, showtime, seats } = req.body;
    if (!movie || !showDate || !showtime || !Array.isArray(seats) || seats.length < 1 || seats.length > 10) return res.status(400).json({ message: 'Choose between 1 and 10 seats.' });
    if (new Set(seats).size !== seats.length || seats.some(s => !/^[A-J](?:[1-9]|10)$/.test(s))) return res.status(400).json({ message: 'Invalid seat selection.' });
    const movieDoc = await Movie.findById(movie); if (!movieDoc) return res.status(404).json({ message: 'Movie not found.' });
    const existing = await Booking.find({ movie, showDate, showtime }).select('seats');
    const occupied = new Set(existing.flatMap(b => b.seats));
    if (seats.some(s => occupied.has(s))) return res.status(409).json({ message: 'One or more selected seats were just booked. Please choose again.' });
    const booking = await Booking.create({ user: req.user.id, movie, showDate, showtime, seats, totalAmount: seats.length * 180, bookingCode: 'IM-' + crypto.randomBytes(4).toString('hex').toUpperCase() });
    res.status(201).json(await Booking.findById(booking._id).populate('movie', 'title posterUrl duration'));
  } catch (e) { next(e); }
});
router.get('/mine', auth, async (req, res, next) => { try { res.json(await Booking.find({ user: req.user.id }).populate('movie', 'title posterUrl duration').sort({ createdAt: -1 })); } catch (e) { next(e); } });
router.delete('/:id', auth, async (req, res, next) => { try { const booking = await Booking.findOneAndDelete({ _id: req.params.id, user: req.user.id }); if (!booking) return res.status(404).json({ message: 'Booking not found.' }); res.json({ message: 'Demo booking cancelled.' }); } catch (e) { next(e); } });
export default router;
