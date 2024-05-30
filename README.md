# Ovaload Backend

Ovaload Backend is the server-side component of the Ovaload fitness app, responsible for managing user data and providing endpoints for the frontend to interact with.

## Overview

Ovaload Backend is built using Node.js with Express.js framework and MongoDB with Mongoose for data storage and management.

## Deployed App

You can access the deployed app [here](https://ovaload-be.onrender.com/api/sarahw/exercises)

## Features

- **User Management**: CRUD operations for managing user data.
- **Exercise Management**: Store and retrieve user-created exercises.
- **Workout Management**: CRUD operations for creating, updating, and deleting workout routines.
- **Progress Tracking**: Store and retrieve workout logs for progress tracking.

## Installation

To get started with the Ovaload backend, follow these steps:

1. **Clone the repository:**

    `git clone https://github.com/haroldinie/ovaload-be.git`

2. **Navigate to the project directory:**

    `cd ovaload-be`

3. **Install dependencies:**

    `npm install`

4. **Set up the environment variables:**

    Create `.env.test` , `.env.development` and/or `.env.production` files as needed in the root directory to add your environment variables as follows:

    `DATABASE_URL=mongodb://localhost:27017/ovaload`


