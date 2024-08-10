# Use the official Node.js image with the Alpine Linux distribution for a smaller size
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Install the dependencies specified in package.json
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose port 3000 to be accessed by the host machine
EXPOSE 3000

# Command to run the application
CMD ["node", "app.js"]
