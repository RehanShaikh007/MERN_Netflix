
# NETFLIX CLONE

Welcome to the Netflix Clone. Netflix Clone is a full-stack web application built with Node.js, Express.js, MongoDB, React.js, and Tailwind CSS. It allows users to browse, search, and discover movies using the TMDB (The Movie Database) API.

## Project Overview
Netflix Clone provides a user-friendly interface where users can:
- Explore popular, upcoming, and top-rated movies.
- Search for movies by title.

The application integrates with the TMDB API to fetch real-time movie data, enhancing the user experience with up-to-date information and imagery.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- React.js
- Tailwind CSS
- TMDB API (The Movie Database API)

## Features

- **Browse Movies**: Discover popular, upcoming, and top-rated movies.
- **Search Movies**: Search for movies by title.
- **Watch Movies**: Watch The Movie in Popup Window / Full Screen.





## Installation

  **1. Clone The Repository:**
```bash
  git clone https://github.com/RehanShaikh007/MERN_Netflix
```
**2. Navigate to the Project Directory:**
```bash
  cd netflix_mern
```
**3. Install Dependencies:**
- Install Server Dependencies:
```bash
  npm install
```
- Install Client Dependencies:
```bash
  cd client
  npm install
```

**4. Setup Environment Variables:**
- Create a **.env** file in the Root Directory of the Project.
- Define Environment Variables:
```bash
  PORT=8080
  TMDB_API_KEY=your_tmdb_api_key
  MONGODB_URI=your_mongodb_connection_string
```

**5. Seed Initial Data (if applicable):**
```bash
  npm run seed
```
## Usage

To Start the Server and Client:

1. Start the Server:
```bash
  npm run dev
```

2. Start the Client (if separate from server):
```bash
   cd client
   npm run dev
```
3. Open your browser and navigate to **http://localhost:5173** to view the application.

## API Usage
The application interacts with the TMDB API to fetch movie data. API endpoints used include:
- ***/movie/popular :*** Fetches popular movies.
- ***/movie/nowplaying :*** Fetches now playing movies.
- ***/movie/upcoming :*** Fetches upcoming movies.
- ***/movie/top_rated :*** Fetches top-rated movies.
- ***/search/movie :*** Searches movies by title.
- Ensure you have a valid TMDB API key and include it in your *.env* file as *TMDB_API_KEY=your_api_key*.

## Screenshots
![Screenshot 2024-08-01 132057](https://github.com/user-attachments/assets/f0de92a8-be9d-407a-9bd6-5fd02e5e4ae8)

![Screenshot 2024-08-01 132234](https://github.com/user-attachments/assets/90b17ce3-edaa-453b-9f84-5022c5e5f68d)

![Screenshot 2024-08-01 132427](https://github.com/user-attachments/assets/7dca8860-18ad-4668-8134-d71dc8610cb6)

![Screenshot 2024-08-01 140149](https://github.com/user-attachments/assets/e329bdb0-49f7-4800-ade5-85eeb647b23f)

![Screenshot 2024-08-01 132517](https://github.com/user-attachments/assets/50dceae9-76ab-4c5d-87fd-c5d63e48f4e3)

![Screenshot 2024-08-01 140109](https://github.com/user-attachments/assets/763e2f8c-c75c-46d7-b116-2e045ce9defb)

![Screenshot 2024-08-01 132602](https://github.com/user-attachments/assets/22a1e01f-9376-47bb-92e2-1755d60c7fd4)


## Contributing

Contributions are always welcome!
If you'd like to contribute, please follow these steps:

- **Fork the Repository:** Fork the repository to your GitHub account.

- **Create a New Branch:** Create a new branch for your feature or bug fix.

- **Make Changes:** Implement your changes or additions.

- **Commit Changes:** Commit your changes with descriptive commit messages.

- **Push Changes:** Push your changes to your forked repository.

- **Open a Pull Request:** Submit a pull request, detailing the changes you've made.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# NETFLIX CLONE BACKEND API

# Project Overview
The Netflix Clone Backend API facilitates user authentication and content browsing for a movie streaming application. It handles user registration, login/sign-in, and serves content based on user sessions.

## Technologies Used
- Node.js
  
- Express.js
  
- MongoDB (or your preferred database)
- JSON Web Token (JWT) for Authentication
- API Endpoints
- User Routes
- ***REGISTER USER :***
- *URL*: POST /api/v1/user/register Description: Registers a new user in the system. 
- *Request Body*:
   json
```bash
  {
  "fullName": "example",
  "email": "example@example.com",
  "password": "password"
}

- Response:

  json
```
{ "success": true, "message": "User registered successfully" }

- ***LOGIN USER :***
- *URL*: POST /api/v1/user/login Description: Logs in an existing user and returns a JWT token for authentication.
- *Request Body*:
  json
```bash
  
{
  "email": "example@example.com",
  "password": "password"
}
- Response:

json
```
{ "success": true, "token": "<jwt_token>" }

- ***BROWSE CONTENT :***
- *URL*: GET /api/v1/user/browse Description: Retrieves the home page content based on the user's session (authentication required).

## Installation

  **1. Clone The Repository:**
```bash
  git clone https://github.com/RehanShaikh007/MERN_Netflix
```
**2. Navigate to the Project Directory:**
```bash
  cd backend
```
**3. Install Dependencies:**
- Install Server Dependencies:
```bash
  npm install
```

**4. Setup Environment Variables:**
- Create a **.env** file in the Root Directory of the Project.
- Define Environment Variables:
```bash
  DATABASE CONNECTION URI
  JWT SECRET KEY, etc
```

**5. Start the Server:**
```bash
  npm run dev  
```
The API will be accessible at **http://localhost:5173**.

## Usage
- Ensure you have MongoDB installed and running.
- Modify the .env file with your specific configurations before starting the server.
- Use tools like Postman or curl to interact with the API endpoints.

## Contributing 
Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

- Fork the repository and create a new branch.
- Make your changes and test thoroughly.
- Submit a pull request detailing the changes and improvements made.

## Credits
**NETFLIX:** The original NETFLIX platform that inspired this project. Visit **[NETFLIX](https://www.netflix.com/in/)** for more Movie Experience.

