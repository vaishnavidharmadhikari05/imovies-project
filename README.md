# IMovies — Movie Ticket Booking System

A full-stack student project built with React, Bootstrap, Node.js, Express, MongoDB, Mongoose, JWT and bcrypt.

## Features
- Responsive movie discovery page with search and movie details
- Registration/login with hashed passwords and JWT-protected routes
- Date and showtime selection
- Interactive 80-seat layout; already booked seats are disabled
- Booking confirmation, unique booking code, booking history and demo cancellation
- REST API, validation, error handling and MongoDB persistence
- No real payment processing; ticket price is a demo ₹180 per seat

## Requirements
- Node.js 18+ (Node.js 20 LTS recommended) and npm
- MongoDB running locally, or a MongoDB Atlas connection string
- VS Code and a modern browser

## 1. Configure MongoDB
Option A: Install MongoDB Community Server and start the local MongoDB service. The default database URI is `mongodb://127.0.0.1:27017/imovies`.

Option B: Create a MongoDB Atlas cluster and obtain its connection string. Use the connection string in `server/.env` as `MONGODB_URI`. Replace `<password>` and allow your current IP in Atlas Network Access. Do not commit credentials.

## 2. Configure environment variables
Copy `server/.env.example` to `server/.env` and set a long random `JWT_SECRET`. Example:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/imovies
JWT_SECRET=change-this-to-a-long-random-secret
CLIENT_URL=http://localhost:5173
```

Optional: copy `client/.env.example` to `client/.env`. The default API URL is `http://localhost:5000/api`.

## 3. Install and run
Open a terminal in the project root:

```bash
npm install
npm run install:all
npm run dev
```

Open `http://localhost:5173`. Backend API health check: `http://localhost:5000/api/health`.

If you prefer separate terminals, run `npm run dev` inside `server`, and `npm run dev` inside `client`.

## API endpoints
- `GET /api/health`
- `GET /api/movies?search=inception`
- `GET /api/movies/:id`
- `POST /api/auth/register` — `{ "name": "Asha", "email": "asha@example.com", "password": "secret123" }`
- `POST /api/auth/login` — `{ "email": "asha@example.com", "password": "secret123" }`
- `GET /api/auth/me` — Bearer token required
- `GET /api/bookings/occupied?movie=MOVIE_ID&date=YYYY-MM-DD&showtime=6%3A00%20PM`
- `POST /api/bookings` — Bearer token required; `{ "movie": "MOVIE_ID", "showDate": "YYYY-MM-DD", "showtime": "6:00 PM", "seats": ["A1", "A2"] }`
- `GET /api/bookings/mine` — Bearer token required
- `DELETE /api/bookings/:id` — Bearer token required

The movie list seeds sample records into MongoDB the first time `GET /api/movies` is called on an empty database. Sample movie data and poster images are for demonstration.

## Test checklist
1. Register a new user and log out.
2. Log in with the same account.
3. Search and open a movie.
4. Select a future date, showtime and two seats; confirm booking.
5. Open My bookings and verify the booking code, seats and amount.
6. Open the same movie/date/showtime in another session or account and verify booked seats appear disabled.
7. Cancel the demo booking and verify it disappears from the list.
8. Test API health and authentication endpoints in Postman.

## Notes / limitations
This is a learning/demo project. Booking seat checks are validated by the API, but production-grade simultaneous booking requires stronger database-level uniqueness/transaction handling and an appropriate MongoDB replica-set deployment. Payments, email delivery and admin management are not implemented.
