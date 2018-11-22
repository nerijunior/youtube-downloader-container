FROM node:alpine

RUN apk add ffmpeg

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN npm install

CMD ["npm", "start"]