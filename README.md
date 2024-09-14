# URL-Shortener

## Overview
This project is a **URL Shortener** web application built using the **MERN stack** technologies. It allows users to generate short, unique URLs for their long URLs, making it easier to share and manage links. The application includes user authentication and authorization to ensure only authorized users can create and manage their URLs.

## Technologies Used
- **MongoDB**: Database for storing URL mappings and user details.
- **Express.js**: Web framework for handling server-side logic.
- **Node.js**: JavaScript runtime environment for server-side code execution.
- **EJS**: Templating engine for rendering dynamic views.
- **JWT (JSON Web Token)**: Used for secure authentication and authorization.

## Features
- **User Authentication**: Users can sign up, log in, and manage their accounts using JWT-based authentication.
- **URL Shortening**: Users can input a long URL and get a shortened version.
- **URL Management**: Users can view, edit, or delete their shortened URLs.
- **Redirection**: Visiting the shortened URL redirects users to the original long URL.
- **Authorization**: Only logged-in users can create and manage their shortened URLs.

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (local or cloud-based like MongoDB Atlas)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SidGit195/URL-Shortener.git
```

2. Navigate into the project directory:
```bash
cd URL-Shortener
```

3. Install the required dependencies:
```bash
npm install
```

4. Set up the environment variables by creating a .env file in the root directory:
```bash
MONGODB_URI=<your-mongo-db-connection-string>
JWT_SECRET=<your-jwt-secret>
PORT=8000
```

5. Start the server:
```bash
npm start
```

6. Open your browser and navigate to http://localhost:8000 to access the application.

## Usage
- Sign Up or Log In to access the URL shortening features.
- Enter a long URL to get a shortened version.
- Manage your shortened URLs from your dashboard.
- Share the shortened URL, and it will redirect users to the original long URL.

This URL-Shortener project is a handy tool for managing and sharing URLs efficiently with added security through user authentication.

Enjoy URL-Shortener Project! If you find this helpful follow me on GitHub! 😄
