# IMovies – Project Execution Guide

## 1. Introduction

This document explains how to configure and run the IMovies movie ticket booking application in a local development environment.

IMovies consists of a React frontend, a Node.js and Express.js backend, and a MongoDB database.

## 2. Prerequisites

Install the following tools before running the project:

- Node.js and npm.
- Visual Studio Code or another code editor.
- MongoDB local installation or a MongoDB Atlas database.
- Git, if cloning the project from GitHub.
- A modern web browser.

## 3. Obtain the Source Code

Clone the GitHub repository using:

```bash
git clone https://github.com/vaishnavidharmadhikari05/imovies-project.git
```

Open the downloaded project folder in Visual Studio Code.

Alternatively, download the repository as a ZIP file and extract it.

## 4. Install Dependencies

Open a terminal in the project root.

Install the root dependencies:

```bash
npm install
```

Install the frontend and backend dependencies using the scripts provided by the project. For this repository, the configured installation script can be run using:

```bash
npm run install:all
```

Wait for the installation process to finish successfully.

## 5. Configure Environment Variables

Create the required `.env` file in the backend directory, following the configuration expected by the application.

For example:

```env
PORT=5000
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_LONG_RANDOM_SECRET
CLIENT_URL=http://localhost:5173
```

Replace the placeholders with valid configuration values.

Do not commit the real `.env` file or expose database passwords and secret keys in public documentation.

## 6. Start the Application

From the project root, run the configured development command:

```bash
npm run dev
```

If the root development script starts both the frontend and backend, wait for both services to report that they are ready.

If the command is unavailable, inspect the root and child `package.json` files and start each service using its configured scripts.

## 7. Open the Website

Open the frontend URL shown in the terminal. In a typical Vite development setup, it is:

```text
http://localhost:5173
```

The backend may run on:

```text
http://localhost:5000
```

These are expected local development addresses; use the actual addresses printed by the application if they differ.

## 8. Test the Application

Verify the following workflows:

1. Open the homepage and browse the movie listings.
2. Search for a movie, if search is available.
3. Open movie details and select a showtime.
4. Register a test account.
5. Log in with the test account.
6. Select available seats.
7. Confirm a booking.
8. Open My Bookings and verify the saved booking.
9. Refresh the page and verify that the booking remains available.
10. Test cancellation and confirm the resulting booking and seat status.

## 9. Troubleshooting

### MongoDB Connection Error

Check that the database is running or that the Atlas connection string, database user, password, and network access settings are correct.

### Missing Dependencies

Run the appropriate npm installation command in the directory containing the relevant `package.json`.

### Port Already in Use

Check whether another process is using the required port and stop that process or configure an available port.

### Frontend Cannot Reach Backend

Verify the backend URL, API configuration, server status, and CORS settings.

### Authentication Errors

Verify that the JWT secret is configured and that the frontend sends authentication tokens as required by the API.

## 10. Conclusion

Following these steps allows a developer to configure and run IMovies locally, verify its principal workflows, and troubleshoot common setup problems.
