# IMovies – MongoDB Database Development

## 1. Introduction

MongoDB is the database used by IMovies to store application data. It is a NoSQL document-oriented database that stores records in BSON format, a binary representation of JSON-like documents.

Mongoose is used as an Object Data Modeling (ODM) library to define schemas and interact with MongoDB from the Node.js backend.

## 2. Database Configuration

The application connects to MongoDB using a connection string stored in an environment variable.

For local development, the database connection string may follow this format:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/imovies
```

For MongoDB Atlas, the connection string is obtained from the Atlas dashboard.

The connection string, database password, and other secrets must remain private and should not be committed to GitHub.

## 3. Establishing a Database Connection

The backend uses Mongoose to establish a connection to MongoDB. The connection should be initialized before the application begins handling requests that depend on the database.

A typical connection pattern is:

```javascript
const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
```

This is an illustrative example. The actual connection function and file location depend on the existing backend implementation.

## 4. Database Entities

The main entities in IMovies are Users, Movies, and Bookings.

### 4.1 Users Collection

Stores registered user information.

Typical fields include:
- Name
- Email
- Hashed password
- Creation and update timestamps, if configured

Passwords must be hashed rather than stored as plain text.

### 4.2 Movies Collection

Stores information about the movies available in the application.

Typical fields include:
- Movie title
- Description
- Genre
- Duration
- Rating
- Poster reference
- Language
- Showtimes

The exact fields and data types depend on the Movie schema.

### 4.3 Bookings Collection

Stores ticket booking information.

Typical fields include:
- User reference
- Movie reference
- Selected date
- Showtime
- Selected seats
- Total amount
- Booking status, if implemented
- Creation and update timestamps, if configured

## 5. Schemas and Models

A Mongoose schema defines the structure, data types, validation rules, and other options for documents in a collection.

A Mongoose model is created from a schema and provides methods for creating, querying, updating, and deleting records.

For example, a simplified schema can be defined as follows:

```javascript
const mongoose = require("mongoose");

const exampleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }
});

const Example = mongoose.model("Example", exampleSchema);
```

This example illustrates the relationship between a schema and a model. It is not a replacement for the actual User, Movie, or Booking models in IMovies.

## 6. Relationships Between Collections

MongoDB supports document references that allow related records to be connected.

In IMovies:
- A booking references the user who made it.
- A booking references the selected movie.
- A user can have multiple booking records.
- A movie can be associated with multiple booking records.

These relationships are represented through references in the database rather than requiring a traditional relational join structure.

## 7. Database Operations

The backend uses database operations to:
- Create user accounts.
- Retrieve movie information.
- Save booking records.
- Retrieve bookings for an authenticated user.
- Update or cancel bookings when supported.

Database validation and backend checks help maintain data consistency.

## 8. Data Integrity and Security

- Store only hashed passwords.
- Keep connection strings and credentials in environment variables.
- Validate data before writing it to the database.
- Verify ownership before exposing or modifying personal bookings.
- Check seat availability when processing a booking.
- Use appropriate concurrency controls to prevent conflicting reservations.

## 9. Conclusion

MongoDB provides persistent storage for the IMovies application, while Mongoose provides schemas and models for structured database operations. Together, they support user accounts, movie information, and ticket booking management.
