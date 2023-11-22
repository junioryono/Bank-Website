#!/bin/bash

# Navigate to backend directory and start Django server
cd backend
python3 manage.py runserver &

# Navigate to frontend directory and start React (Vite) server
cd ../frontend
npm run dev &

# Wait for any process to finish
wait