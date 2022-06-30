# syntax=docker/dockerfile:1
# followed this guide https://docs.docker.com/language/nodejs/build-images/
FROM node:18-alpine3.15

ENV NODE_ENV production

EXPOSE 3000

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY . .

CMD [ "node", "server.js" ]