# Todo App Backend

A backend API for a Todo App, built to manage and store todo tasks.

## Features

* Create, read, update, and delete todo tasks
* User authentication and authorization
* API endpoints for CRUD operations

## Technologies Used

* [Node.js](https://nodejs.org/en/) as the backend runtime environment
* [Express.js](https://expressjs.com/) as the web framework
* [MYSQL](https://www.mysql.com/) as the database

## File Structure

```
todo-app-backend/
│
├── controller/
│ ├── list-controller.js
│ ├── sticky-notes-controller.js
│ ├── tag-controller.js
│ ├── task-controller.js
│ └── user-controller.js
├── database/
│ └── db.js
├── models/
│ ├── list-schema.js
│ ├── sticky-notes-schema.js
│ ├── tag-schema.js
│ ├── task-schema.js
│ └── user-schema.js
├── route/
│ └── route.js
├── .env
├── .gitignore
├── app.js
├── generate-secret.js
├── LISENCE
├── package-lock.json
├── package.json
├── README.md
```

## Frontend Repository

The backend code for this project is available at [GitHub Repository Link](https://github.com/hellaanxiouss/todo-app-frontend).

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/hellaanxiouss/todo-app-backend.git
   cd todo-app-backend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the app**:
   ```bash
   npm run dev
   ```

## API Endpoints

### Tasks

* `GET /get-task`: Retrieve all tasks
* `POST /create-task`: Create a new task
* `GET /api/todo/:id`: Retrieve a single task by ID
* `PUT /get-task/:id`: Update a task
* `PUT /soft-delete-task/:id`: Soft delete a task
* `POST /delete-task/:id`: Delete a task

### Lists

* `GET /get-list`: Retrieve all lists
* `POST /create-list`: Create a new list
* `PUT /soft-delete-list/:id`: Soft delete a list

### Tags

* `GET /get-tag`: Retrieve all tags
* `POST /create-tag`: Create a new tag
* `PUT /soft-delete-tag/:id`: Soft delete a tag

### Sticky Notes

* `GET /api/auth/login`: Retrive all sticky notes
* `POST /create-sticky-note`: Create a new sticky note
* `PUT /soft-delete-sticky-note/:id`: Delete a sticky note

### User Authentication

* `GET /get-user`: Retrieve all users
* `POST /create-user`: Register a new user
* `POST /authenticate`: Login an existing user

## Environment Veriables

```
DB_NAME: "Your_DB_name"              # The name of your database
DB_HOST: "YOUR_DB_HOST"              # The hostname or IP address of your database server
DB_PORT: "YOUR_DB_PORT"              # The port number your database is listening on
DB_USER: "YOUR_DB_USER"              # The username to connect to your database
DB_PASSWORD: "YOUR_DB_PASSWORD"      # The password for the database user
DB_DIALECT: "YOUR_DB_DIALECT"        # The type of database (e.g., postgres, mysql)

PORT: "YOUR_APP_PORT"            # The port number your application will run on

JWT_SECRET_KEY: "YOUR_JWT_SECRET_KEY"  # Secret key used for signing JWT tokens
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request to contribute to this project.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
