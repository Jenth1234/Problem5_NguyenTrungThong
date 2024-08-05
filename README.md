# NguyenTrungThong-Backend

## Description

This is a basic backend project built with Express.js, providing CRUD (Create, Read, Update, Delete) functionalities for user management. The project connects to a MongoDB database for storing and managing user data.

## Features

- **Create User** (`POST /user/register`): Create a new user.
- **Get User Information** (`GET /user/getUser/:id`): Retrieve detailed information of a user by ID.
- **Update User Information** (`POST /user/updateUser/:id`): Update user information by ID.
- **List Users by Gender** (`GET /user/listGender`): Retrieve a list of users filtered by gender (male or female).
- **Delete User** (`DELETE /user/delete/:id`): Delete a user by ID.

## Installation and Setup

### Requirements

- Node.js (v14 or higher)
- MongoDB

### Installation

1. **Clone Repository**

   ```bash
   git clone https://github.com/Jenth1234/NguyenTrungThong-Backend.git
   cd NguyenTrungThong-Backend
2.  Install Dependencies
    npm install
3.Configure Environment Variables
Create a .env file in the root of the project with the following content:
    MONGODB_URI=<your-mongodb-uri>
    PORT=3050
4.Run the Project
    npm run dev
The project will run on http://localhost:3050.
