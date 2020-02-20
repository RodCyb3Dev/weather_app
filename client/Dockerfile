FROM node:13.7.0

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Expose ports
#EXPOSE 8000

# Build arguments
ARG NODE_VERSION=13.7.0

# Environment
ENV NODE_VERSION $NODE_VERSION

# Start the app
CMD [ "npm", "start" ]
#CMD [ "/bin/bash" ]
