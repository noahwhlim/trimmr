# Trimmr - URL Shortener

Trimmr is a modern URL shortening application built with React, TypeScript, and FastAPI. It leverages Azure Cosmos DB for storage and provides a clean, responsive user interface powered by Tailwind CSS.

## Project Structure

```
trimmr/
├── client/          # React frontend
│   ├── src/
│   ├── public/
│   ├── vite.config.ts
│   └── package.json
├── server/          # FastAPI backend
│   ├── main.py
│   ├── requirements.txt
│   └── startup.sh
├── Dockerfile       # Docker build configuration
└── .env             # Environment variables
```

## Features

- Shorten long URLs into concise, shareable links.
- Redirect shortened URLs to their original destinations.
- Responsive and intuitive UI built with React and Tailwind CSS.
- Backend API built with FastAPI and Python.
- Azure Cosmos DB integration for scalable storage.

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Radix UI

### Backend

- FastAPI
- Python
- Azure Cosmos DB
- Uvicorn

### Deployment

- Docker
- Azure Static Web Apps (optional)

## Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- Python 3.11+
- Docker (optional, recommended for deployment)

### Environment Variables

Create a `.env` file in the project root with the following variables:

```env
COSMOS_ENDPOINT=your_cosmos_db_endpoint
COSMOS_KEY_READ=your_cosmos_db_read_key
COSMOS_KEY_WRITE=your_cosmos_db_write_key
DATABASE_NAME=your_database_name
CONTAINER_NAME=your_container_name
ENVIRONMENT=local
```

### Running Locally

#### Frontend

Navigate to the client directory and install dependencies:

```sh
cd client
npm install
npm run dev
```

Frontend will run at [http://localhost:5173](http://localhost:5173).

#### Backend

Navigate to the server directory, install dependencies, and start the server:

```sh
cd server
pip install -r requirements.txt
uvicorn main:app --host=0.0.0.0 --port=8000
```

Backend API will run at [http://localhost:8000](http://localhost:8000).

### Docker Deployment

Build and run the Docker container:

```sh
docker build -t trimmr .
docker run -p 80:80 trimmr
```

The application will be accessible at [http://localhost](http://localhost).

## API Endpoints

| Method | Endpoint           | Description                  |
|--------|--------------------|------------------------------|
| POST   | `/api/generate`    | Generate a shortened URL     |
| GET    | `/api/getall`      | Retrieve all shortened URLs  |
| GET    | `/{id}`            | Redirect to original URL     |

## Contributing

Feel free to open issues or submit pull requests to improve Trimmr.

## License

MIT License © 2025 Trimmr
