# DEVELOPMENT
FROM node:lts-alpine AS development

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

RUN yarn build  

CMD ["yarn", "start:prod"]