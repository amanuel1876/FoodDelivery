README.md for Food Delivery Website
# Food Delivery Website

This is a full-stack food delivery application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). 
The application allows users to browse food menus, place orders, and track deliveries. 
It also provides an admin dashboard for managing orders and users.

## Features

- **User Authentication**: Secure user registration, login, and JWT-based authentication.
- **Food Menu**: CRUD operations for food items with filtering and sorting options.
- **Order Management**: Place orders, view order history, and track order status.
- **Delivery Tracking**: Track the status of ongoing deliveries.
- **Admin Dashboard**: Manage users and orders from a dedicated admin interface.
- **Payment Integration**: Secure checkout process with payment gateway integration.
- **Responsive Design**: Mobile-friendly user interface.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed (v14 or later recommended).
- **MongoDB**: Set up a MongoDB database (local or cloud-based like MongoDB Atlas).

## Getting Started

Follow these steps to set up the project on your local machine:

### 1. Clone the Repository

```bash
git clone
Navigate to the Project Directory
 cd food-delivery

Install Backend Dependencies
Navigate to the backend directory and install dependencies:

cd backend
npm install
Set Up Environment Variables
Create a .env file in the backend directory and add the following environment variables:
Install Frontend Dependencies
Navigate to the frontend directory and install dependencies:


cd ../frontend
npm install

 Start the Backend Server
Navigate back to the backend directory and start the server:

Copy code
cd ../backend
npm run dev

 Start the Frontend Development Server
Navigate to the frontend directory and start the development server:



cd ../frontend
npm run dev


 Access the Application

Frontend: Open your browser and go to http://localhost:3000 (or the port configured in your vite.config.js).
Backend API: The API will be available at http://localhost:5000.
API Endpoints
User Authentication:

POST /api/users/register: Register a new user.
POST /api/users/login: Log in a user and receive a JWT token.
Food Menu:

GET /api/foods: Retrieve the list of food items.
POST /api/foods: Add a new food item (Admin only).
PUT /api/foods/:id: Update a food item (Admin only).
DELETE /api/foods/:id: Delete a food item (Admin only).
Orders:

POST /api/orders: Place a new order.
GET /api/orders/:id: Get details of a specific order.
GET /api/orders: Get all orders (Admin only).
Delivery Tracking:

GET /api/orders/:id/status: Get the status of an order.


Deployment
For deployment, you can use platforms like Heroku, Render, or DigitalOcean. Ensure that you set up environment variables in your deployment environment.
