# grid-code-generator

This project is a full-stack application built with Node.js - Express and Angular V19. It consists of a frontend application and a backend API.

## Project Structure

```
grid-code-generator/
├── frontend/
│   ├── app/
│   │  ├── components/
│   │  └── services/
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── helpers/
│   │   ├── routes/
│   │   └── services/
│   ├── package.json
└── README.md
```

## Getting Started

To get the project up and running locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/guqoliveira28/grid-code-generator.git
   ```

## Development

This project uses npm workspaces to manage dependencies across the frontend, backend, and shared packages. This means you'll typically run commands from the root of the project.

1. **Install all dependencies:**

Run this command on each application folder

   ```bash
   npm install
   ```

2. **Running individual servers**

 * Frontend (from the frontend directory):

   ```bash
   npm run start
   ```

   This will start the frontend application on http://localhost:4200.

* Backend (from the backend directory):

   ```bash
   npm run dev
   ```

   This will start the backend API on http://localhost:3000.

## Run With Docker

* Build and start the containers:

   ```bash
   docker-compose up -d
   ```

* Access the application:

   * **Frontend**: The frontend application will be accessible at http://localhost:4200 (or the port you've mapped in your docker-compose.yml file).

   * **Backend**: The backend API will be accessible at http://localhost:3000 (or the port you've mapped).

