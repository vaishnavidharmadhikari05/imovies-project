# IMovies – Features, Roles and Responsibilities

## 1. Introduction

IMovies is a web-based movie ticket booking application that allows users to browse movies, view details, select showtimes, reserve seats, and manage their bookings. The system provides a user-friendly interface and uses a backend API to process booking requests and store data.

## 2. Main Features

### 2.1 Movie Browsing

Users can view the available movie listings and explore movie information, including titles, genres, descriptions, ratings, durations, languages, and posters where available.

### 2.2 Movie Search

Users can search for movies by supported search criteria, such as title or genre, depending on the implemented search functionality.

### 2.3 Movie Details and Showtimes

Users can open a movie's details and choose from the showtimes configured in the application.

### 2.4 User Registration

New users can create an account by providing the required registration details.

### 2.5 User Login

Registered users can authenticate themselves to access protected features.

### 2.6 Seat Selection

Users can view the seat layout, select available seats, and review their selection before confirming a booking.

### 2.7 Price Calculation

The application calculates the booking amount using the selected seats and the configured ticket price.

### 2.8 Booking Confirmation

After a successful booking request, the application records the booking and displays its confirmation details.

### 2.9 Booking History

Authenticated users can view their own saved bookings.

### 2.10 Booking Cancellation

Users can cancel eligible bookings through the booking management interface, where cancellation is supported.

### 2.11 Seat Availability

The backend checks existing bookings when processing a reservation to help prevent booking seats that are already reserved.

## 3. User Roles

### 3.1 Guest User

**Responsibilities:**
- Browse available movies.
- View publicly accessible movie information.
- Explore available showtimes.
- Register for an account or proceed to login.

Access to booking and account-specific information may require authentication.

### 3.2 Registered User

**Responsibilities:**
- Log in to the application.
- Browse movies and select showtimes.
- Choose available seats.
- Confirm a ticket booking.
- View personal booking history.
- Cancel eligible bookings.

### 3.3 System / Backend

The backend is responsible for enforcing application rules and processing requests.

**Responsibilities:**
- Validate incoming requests.
- Authenticate users and authorize protected operations.
- Store and retrieve records through MongoDB.
- Process booking and cancellation requests.
- Check seat availability.
- Return appropriate success or error responses.

**Note:** The backend is a system component, not a human user role.

## 4. Security Features

- Passwords are hashed before being stored.
- JWT authentication is used for protected API operations.
- Backend authorization checks should prevent users from accessing another user's bookings.
- Input validation and error handling help protect application integrity.
- Database credentials and secret keys must be stored in environment variables rather than committed to GitHub.

## 5. Limitations

- The current application is a demonstration project, not a complete commercial ticketing platform.
- Real online payment processing is not included.
- Movie listings and showtimes use configured demonstration data rather than a live cinema provider.
- Administrative movie management is not included unless separately implemented.
- Production-grade booking concurrency and payment verification would require additional safeguards.

## 6. Conclusion

IMovies demonstrates the essential workflow of a movie ticket booking system, including movie discovery, user authentication, seat selection, booking management, and database persistence. The separation of responsibilities between users, frontend, backend, and database supports a maintainable application structure.
