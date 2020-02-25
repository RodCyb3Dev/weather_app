FROM node:13.7.0

# Create app directory
WORKDIR '/app'

# Install app dependencies
COPY ./package.json ./
RUN npm install

# Bundle app source
COPY . .
# Run backend build;
CMD ["npm", "run", "start"]

FROM nginx
# Expose ports
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html