Terrible Docker Example

This project is a basic example of using Docker to containerize a simple Node.js application. The application serves a very plain website using Express.

📦 Requirements

Docker installed

(Optional) Docker Compose

🚀 Getting Started

1️⃣ Build the Docker Image

docker build -t terrible_docker_example .

2️⃣ Run the Container

docker run -p 1000:1000 terrible_docker_example

This binds port 1000 of the container to port 1000 of your machine.

3️⃣ Using Docker Compose (Alternative)

If you prefer using Docker Compose, simply run:

docker compose up

📜 Dockerfile Explanation

# Uses Node.js version 22 as the base image
FROM node:22

# Set the working directory inside the container
WORKDIR /app

# Copy package.json to install dependencies
COPY package.json ./
RUN npm install
RUN npm install express

# Copy all other project files
COPY . .

# Set environment variable for the port
ENV PORT=1000

# Expose port 1000 to allow external access
EXPOSE 1000

# Start the application
CMD ["npm", "start"]

🔍 Verifying the Setup

Once the container is running, open your browser and visit:

http://localhost:1000

You should see the basic website served by the Node.js application.

🛑 Stopping the Container

To stop the running container:

docker ps  # Find the CONTAINER_ID
docker stop CONTAINER_ID

If using Docker Compose:

docker compose down

📝 Notes

This is a minimal example for playing around with Docker.

The application uses Express but does not contain much functionality.

The name terrible_docker_example is just for fun—feel free to rename it!

Happy Docker-ing! 🐳