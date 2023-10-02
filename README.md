# Task Manager API

The Task Manager API is a Node.js-based backend service for managing tasks. This API allows you to create, update and retrieve tasks. This is currently made for use by a single user.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- SQLite database for storing tasks.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/jnakhil/TaskManagerAPI.git
2. Install the requirements listed in package.json
    ```bash
    npm i
3. Start a local server. For SQL Database, I've used SQLite which is easy to setup for small demos and is file based relational database. So there is no external server setup required for this app to interact with database. To start the server, run the following command:
    ```bash
    node app.js

This will start a local server by default on PORT 3000. In case if you wish to change the PORT, use .env file to enter desired value of port in the variable named as PORT.


## API Endpoints
1. Create a Task<br />
Endpoint: POST /tasks<br />
Request Body:<br />
   ```json
   {
      "title": "Task Title",
      "description": "Task Description",
   }
Response: Returns the created task.

2. Update a Task by Id<br />Endpoint: PUT /tasks/:task_id<br />Request Body:
   ```json
   {
      "title": "Task Title",
      "description": "Task Description",
      "status": "inprogress"
   }
status can only be one among: ["open", "inprogress", "completed"]. Any other input values for status during update call will result in validation error.<br />
Response: Returns the updated task.

3. List all task<br />Endpoint: GET /tasks<br />
Query Parameters:<br />
   ```bash
   page (optional) - Page number for pagination (default: 1)
   limit (optional) - Number of tasks per page (default: 10)

Response: Returns a list of tasks with pagination details.
