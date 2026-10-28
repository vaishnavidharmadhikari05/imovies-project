# IMovies – Backend Structure and Development

## 1. Introduction

The backend of IMovies is developed using Node.js and Express.js. It provides REST APIs that connect the React frontend to the MongoDB database.

The backend processes user authentication, movie retrieval, booking creation, booking history, and booking cancellation requests.

## 2. Backend Architecture

The backend follows a client-server approach. The frontend sends HTTP requests, Express.js routes direct requests to the relevant handlers, and the backend interacts with MongoDB through Mongoose.

## 3. Backend Folder Structure

The backend is maintained in the `server` directory.

A typical Express.js backend may contain the following components:

```text
server/
├── models/
├── routes/
├── middleware/
├── config/
├── .env
├── package.json
└── server.js
```

The actual filenames and directories should match the existing project source code.

## 4. Server Initialization

The server entry point initializes the Express application, configures middleware, connects to the database, registers API routes, and starts listening on the configured port.

Common responsibilities include:

- Creating the Express application.
- Parsing JSON request bodies.
- Configuring cross-origin requests.
- Connecting to MongoDB.
- Registering API routes.
- Handling errors.
- Starting the HTTP server.

## 5. REST API Development

REST APIs allow the frontend to communicate with the backend using HTTP methods.

Typical methods include:

- **GET:** Retrieve resources.
- **POST:** Create resources or submit operations.
- **PATCH / PUT:** Update resources.
- **DELETE:** Delete resources when supported.

The application uses API endpoints for authentication, movie data, and booking operations.

## 6. Authentication and Authorization

Registration and login endpoints validate user input. Passwords are hashed before storage, and successful authentication can produce a JSON Web Token.

Protected endpoints verify the token and identify the authenticated user before allowing access to private operations.

Authorization checks should ensure that a user can view or cancel only their own bookings.

## 7. Booking Processing

A booking request generally follows these steps:

1. Receive the requested movie, date, showtime, and seats.
2. Authenticate the user where required.
3. Validate the request data.
4. Check the movie and showtime.
5. Check whether the requested seats are available.
6. Calculate or validate the booking amount on the server.
7. Save the booking in MongoDB.
8. Return a success response or an appropriate error.

The backend must not rely only on the frontend to enforce booking rules.

## 8. Error Handling

The backend should return appropriate HTTP status codes and meaningful error messages.

Examples include:

- `200 OK` for successful retrieval or operations.
- `201 Created` for successful resource creation.
- `400 Bad Request` for invalid input.
- `401 Unauthorized` for missing or invalid authentication.
- `403 Forbidden` for disallowed access.
- `404 Not Found` for a missing resource.
- `500 Internal Server Error` for unexpected server errors.

The exact status codes depend on each implemented endpoint.

## 9. Security Considerations

- Keep secrets in environment variables.
- Hash passwords before storing them.
- Validate user input.
- Protect private API routes.
- Verify ownership before allowing booking operations.
- Avoid returning sensitive information in API responses.
- Use database-level protections for booking concurrency where necessary.

## 10. Conclusion

The IMovies backend connects the frontend to the database and implements the core application operations. Its API layer supports authentication, movie retrieval, and booking management while enforcing server-side validation and access controls.
