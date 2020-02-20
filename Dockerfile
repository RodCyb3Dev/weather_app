FROM node:13.7.0

# Create working directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Copy from current dir to container
COPY . .

# Build arguments
ARG NODE_VERSION=13.7.0

# Environment
ENV NODE_VERSION $NODE_VERSION

# Start the app
CMD [ "npm", "run", "dev" ]