FROM node:23-alpine

# Set the working directory in the Docker image
WORKDIR /app

# Copy package manager files and install dependencies
COPY package.json yarn.lock ./
RUN corepack enable yarn && yarn install

# Copy the rest of your application code
COPY . .

# Expose the port your app runs on
EXPOSE 3030

# Command to run your application
CMD ["yarn", "dev"]
