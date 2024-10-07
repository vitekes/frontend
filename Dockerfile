FROM node:22.7.0 as build
WORKDIR /app

COPY package*.json .
COPY yarn.lock .

RUN yarn
COPY . .
RUN yarn build


CMD [ "yarn", "start" ]