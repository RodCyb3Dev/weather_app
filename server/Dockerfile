FROM node:alpine

# Create app directory
WORKDIR "/app"

# Install app dependencies
COPY ./package.json ./
RUN npm install

# Bundle app source
COPY . .
# Run backend build;
CMD ["npm", "run", "start"]