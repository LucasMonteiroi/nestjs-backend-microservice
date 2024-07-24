# DEVELOPMENT
FROM node:20.15.1-alpine3.20 AS development

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

RUN npm run build  

CMD ["npm", "run", "start:prod"]