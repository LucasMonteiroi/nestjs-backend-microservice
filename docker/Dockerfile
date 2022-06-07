# DEVELOPMENT
FROM node:16 AS development

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

RUN yarn build  