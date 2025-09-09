# Express Project: Contact Management API

 This is a backend API built with **Express.js** and **Node.js** to handle contact-related operations. It provides routes for managing contacts, a server configuration, and environment variable setup.

## Project Structure

1. **Routes**:
   - `routes/contactRoutes.js`: Defines API endpoints for contact-related operations (e.g., GET, POST, PUT, DELETE for contacts).
2. **Server**:
   - `server.js`: Main entry point for the application. Configures the Express server and specifies the port for the API.
3. **Environment**:
   - `.env`: Stores environment variables, such as the port number (e.g., `PORT=3000`).
4. **Controllers**:
   - `controllers/contactController.js`: Contains the logic for handling contact-related requests (e.g., creating, retrieving, updating, or deleting contacts).

## Tech Stack
- **Node.js**: Runtime environment.
- **Express.js**: Web framework for building the API.
- **dotenv**: For loading environment variables from `.env`.

## Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Express_Project