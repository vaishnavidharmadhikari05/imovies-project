import { Router } from 'express';
import Movie from '../models/Movie.js';
const router = Router();
const seedMovies = [
 { title: 'Interstellar', genre: 'Sci-Fi', duration: '2h 49m', rating: 8.7, language: 'English', description: 'A team travels beyond this galaxy to discover whether mankind has a future among the stars.', posterUrl: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' },
 { title: 'The Dark Knight', genre: 'Action', duration: '2h 32m', rating: 9.0, language: 'English', description: 'Batman faces a criminal mastermind who pushes Gotham into chaos.', posterUrl: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg' },
 { title: 'Inception', genre: 'Sci-Fi', duration: '2h 28m', rating: 8.8, language: 'English', description: 'A skilled thief enters dreams to steal secrets and attempt the impossible.', posterUrl: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg' },
 { title: 'Dune: Part Two', genre: 'Adventure', duration: '2h 46m', rating: 8.5, language: 'English', description: 'Paul Atreides unites with the Fremen while seeking justice and a new destiny.', posterUrl: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg' },
 { title: 'Spider-Man: Across the Spider-Verse', genre: 'Animation', duration: '2h 20m', rating: 8.6, language: 'English', description: 'Miles Morales swings across the multiverse on an extraordinary adventure.', posterUrl: 'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj惠.jpg' },
 { title: 'The Shawshank Redemption', genre: 'Drama', duration: '2h 22m', rating: 9.3, language: 'English', description: 'Hope and friendship endure inside the walls of Shawshank prison.', posterUrl: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg' }
].map(m => ({ ...m, showtimes: ['10:00 AM', '1:30 PM', '6:00 PM', '9:15 PM'] }));
router.get('/', async (req, res, next) => {
  try {
    let movies = await Movie.find().sort({ title: 1 });
    if (!movies.length) { await Movie.insertMany(seedMovies); movies = await Movie.find().sort({ title: 1 }); }
    const q = (req.query.search || '').toLowerCase();
    if (q) movies = movies.filter(m => `${m.title} ${m.genre} ${m.language}`.toLowerCase().includes(q));
    res.json(movies);
  } catch (e) { next(e); }
});
router.get('/:id', async (req, res, next) => { try { const movie = await Movie.findById(req.params.id); if (!movie) return res.status(404).json({ message: 'Movie not found.' }); res.json(movie); } catch (e) { next(e); } });
export default router;
