# IMovies – Project Setup and Configuration

## 1. Introduction

The IMovies project is organized as a full-stack web application with separate frontend and backend directories. This separation makes it easier to develop, test, and maintain the user interface and server-side functionality independently.

## 2. Creating the Project Folder

The main project folder is named `imovies-project`. It contains the frontend, backend, configuration files, and documentation.

The general structure is:

```text
imovies-project/
├── client/
├── server/
├── docs/
├── .gitignore
├── package.json
└── README.md
```

The `docs` folder contains project documentation, while `client` and `server` contain the application code.

## 3. Prerequisites

The following tools are used to develop and run the project:

- Visual Studio Code for editing source code.
- Node.js for running JavaScript outside the browser.
- npm for installing dependencies and executing scripts.
- MongoDB for persistent data storage.
- Google Chrome or another modern browser for testing.
- Git and GitHub for version control and source-code hosting.

## 4. Client Setup

The client contains the React.js frontend, which is responsible for displaying the application and accepting user input.

### Main responsibilities

- Display movie listings and details.
- Provide search and navigation controls.
- Display authentication forms.
- Allow users to select showtimes and seats.
- Show booking summaries and confirmations.
- Display booking history.

### Typical setup procedure

1. Open the project folder in Visual Studio Code.
2. Open a terminal in the project root.
3. Install the project dependencies.
4. Install client dependencies using the project's configured installation script.
5. Configure the frontend API URL if required.
6. Start the frontend using the appropriate npm script.
7. Open the local development URL in a browser.

The exact commands should be taken from the current `package.json` files.

## 5. Server Setup

The server contains the Node.js and Express.js backend.

### Main responsibilities

- Provide REST API endpoints.
- Process authentication requests.
- Retrieve movie information.
- Create and manage bookings.
- Validate booking requests.
- Communicate with MongoDB.
- Return JSON responses to the frontend.

### Typical setup procedure

1. Open the server directory.
2. Install its dependencies.
3. Configure environment variables.
4. Verify the MongoDB connection settings.
5. Start the server using the configured npm script.
6. Check the terminal for startup errors.

## 6. Environment Configuration

Environment variables store configuration values such as the database connection string, authentication secret, server port, and frontend origin.

Sensitive values must not be committed to GitHub. The local `.env` file should be excluded using `.gitignore`.

A separate set of environment variables should be configured when deploying the application.

## 7. Execution Overview

During local development, the frontend and backend generally run as separate processes. The frontend sends HTTP requests to the backend, and the backend communicates with MongoDB.

Both services must be available for features that depend on the API and database.

## 8. Conclusion

The project setup separates frontend and backend responsibilities and provides a structured foundation for the development and execution of IMovies. Following the correct installation and configuration procedure helps developers run the application consistently.
