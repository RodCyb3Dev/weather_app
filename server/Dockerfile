FROM node:13.7.0

# Create app directory
WORKDIR /app

# Install app dependencies
COPY ./package.json ./

RUN npm install --production && npm i fsevents@latest -f --save-optional

# Bundle app source
COPY . .

# Start the app
CMD ["npm", "run", "start"]
#CMD [ "/bin/bash" ]