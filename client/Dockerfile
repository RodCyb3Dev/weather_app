FROM node:13.7.0 as builder

# Create app directory
WORKDIR /app

# Install app dependencies
COPY ./package.json .
RUN npm install

# Bundle app source
COPY ./ ./

# Create client build;
RUN npm run build

FROM nginx
# Expose ports
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html