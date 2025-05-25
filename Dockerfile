# Stage 1: Build React frontend
FROM node:20 AS frontend-build
WORKDIR /app/client
COPY client/ .
RUN npm install && npm run build

# Stage 2: Build FastAPI backend
FROM python:3.11-slim AS backend
WORKDIR /app

# Install backend dependencies
COPY server/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend source code
COPY server/ ./server

# Copy built frontend from previous stage
COPY --from=frontend-build /app/client/dist ./client_dist

# Expose port and start FastAPI
CMD ["uvicorn", "server.main:app", "--host", "0.0.0.0", "--port", "80"]
