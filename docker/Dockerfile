# DEVELOPMENT
FROM node:lts-alpine AS development

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

RUN yarn build  


# Production Image
FROM node:lts-alpine as main

WORKDIR /app
EXPOSE 3000

COPY package.json yarn.lock ./
RUN touch .env

RUN set -x && yarn --production=true

COPY --from=development /app/dist ./dist

CMD ["yarn", "start:prod"]