# Use an official Node.js runtime as a parent image
FROM node:alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code to the container
COPY . .

# Set the environment variable for the app's port
ENV PORT 3000

# Expose the port the app will run on
EXPOSE $PORT

# Start the app
CMD ["npm", "start"]
