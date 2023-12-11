#!/bin/bash

# Navigate to backend directory and start Django server
cd backend
python3 manage.py runserver &

# Navigate to frontend directory and start React (Vite) server
cd ../frontend
npm run dev &

# run docker container
docker run --name postgres-db -e POSTGRES_PASSWORD=123 -p 5432:5432 -d postgres &

# Wait for any process to finish
wait