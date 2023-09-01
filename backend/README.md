# Magic Brain

<div align='center'>

![GitHub forks](https://img.shields.io/github/forks/Mel-TB/MagicBrain?label=Fork&style=for-the-badge&color=%2378909C)
![GitHub Repo stars](https://img.shields.io/github/stars/Mel-TB/MagicBrain?label=Stars&style=for-the-badge&color=%2378909C)

</div>

<br/>
<div align='center'>

</div>

## Table of Contents

<details>

<summary>Table</summary>

1. [About The Project](#about-the-project)
   - [Built With](#built-with)
2. [Getting Started](#getting-started)

   - [Installation](#installation)

3. [API Endpoints](#api-endpoints)
4. [Code Structure](#code-structure)
5. [Deployment](#deployment)
6. [Contact](#contact)
   </details>

## About The Project

This is the backend API for the Magic Brain. It provides endpoints for user registration, user login, retrieving user profiles, and handling image uploads.

### Built With

This frontend website was created with

- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
- ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
- ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

## Getting Started

### Installation

```sh
git clone https://github.com/Mel-TB/MagicBrain
```

- Run these following commands on your terminal/cmd prompt:

```sh
cd MagicBrain
npm install
```

- Create a .env file in root directory add and update valyes with your database credentials:

```sh
DATABASE_URL=your-database-url
DATABASE_HOST=your-database-host
DATABASE_USER=your-database-user
DATABASE_PW=your-database-password
DATABASE_DB=your-database-name
PORT=your-port-number
```

- Run the application:

```sh
npm start or nodemon start
```

## API Endpoints

### Get /

- Description: Returns a simple message indicating that the API is working correctly.
- Response: `200 OK` with the message 'it is working'.

### POST /signin

- Description: Handles user authentication /login by checking the provided credentials against the database.
- Request Body:
  {
  - `email`: `user@example.com`
  - `password`: `password`.
    }
- Response:
  - `200 OK`: User object with profile information
  - `404 Bad Request`: Returns an error message if the provided credentials are invalid or missing.

### POST /register

- Description: Handles user signup by adding a new user to the database.
- Request Body:
  {
  - `name`: `John Doe`,
  - `email`: `user@example.com`,
  - `password`: `password`
    }
- Response:
  - `200 Created`: Return the newly created user object
  - `400 Bad Request`: Returns an error message if the provided credentials are invalid, missing or email is already register inside the database.

### GET /profile/:id

- Description: Retrieves the profile information of a specific user by their ID.
- Parameters:
  - `id`: The ID of the user.
- Response:
  - `200 OK`: Returns the user information of the user with the specified ID
  - `400 Bad Request`: Returns an error message if the user with the specified ID is not found in the database.

### PUT /image

- Description: Increments the entry count of the user with the specified ID and returns the updated entry count.
- Request Body:
  - `id`: The ID of the user.
- Response:
  - `200 OK`: Returns the updated entry count of the user with the specified ID
  - `400 Bad Request`: Returns an error message if the request body is invalid or missing.

## Code Structure

The Code is organized into separate files for each controller functions:

- `register.js`: Handles user registration
- `signin.js`: Handle user authentication
- `profile.js`: Handles profile retrieval
- `image.js`: Handles image handling

## Deployment

- ![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)

> [!NOTE]
>
> - Make sure to properly configure the **PostgreSQL** database connection parameters in the `.env` file before starting the server.
> - The bcrypt library is used for password hasing and comparisons
> - CORS middleware is enabled to allow cross-origin requests

## Contact

Trami Melinda

<a href='https://twitter.com/mel_trbd'>![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)</a>

<a href='mailto:tramimelinda@gmail.com'>![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)</a>

<a href='https://fr.linkedin.com/in/melindat'>![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)</a>
