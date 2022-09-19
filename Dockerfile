# Dockerfile

FROM node:16.15-alpine3.14
#RUN mkdir -p /usr/src/app
# Create app directory
WORKDIR /usr/source/app

# Install app dependencies
COPY package*.json ./
RUN npm install

RUN adduser -S avikal

# Bundle app source
COPY . .

RUN chown -R avikal /usr/source/app
USER avikal

EXPOSE 3000
CMD [ "node", "index.js" ]
