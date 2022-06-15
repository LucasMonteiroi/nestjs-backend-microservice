# NestJS Backend Microservice &middot;

![GitHub top language](https://img.shields.io/github/languages/top/lucasmonteiroi/nestjs-backend-microservice?style=flat-square)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/lucasmonteiroi/nestjs-backend-microservice?style=flat-square)](https://github.com/LucasMonteiroi/nestjs-backend-microservice/blob/develop/package.json)
[![GitHub repo size](https://img.shields.io/github/repo-size/lucasmonteiroi/nestjs-backend-microservice?style=flat-square)](https://github.com/LucasMonteiroi/nestjs-backend-microservice)
![GitHub last commit](https://img.shields.io/github/last-commit/lucasmonteiroi/nestjs-backend-microservice?style=flat-square)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/lucasmonteiroi/nestjs-backend-microservice/Docker%20Image%20CI?style=flat-square)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/LucasMonteiroi/nestjs-backend-microservice/compare)
![GitHub](https://img.shields.io/github/license/lucasmonteiroi/nestjs-backend-microservice?style=flat-square)

A backend microservice to make easily the development

## Prerequisites

What is needed to set up the dev environment. For instance, global dependencies or any other tools. include download links.

- [Docker](https://www.docker.com/get-started/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node Js](https://nodejs.dev/download)
- [Typescript](https://www.typescriptlang.org/download)
- [Postgres](https://www.postgresql.org/download/)

## Project structure

```
.czrc
.env.example
├─ .eslintrc.js
├─ .github
│  └─ workflows
│     ├─ deploy-main.yml
│     └─ docker-image.yml
├─ .gitignore
├─ .husky
│  └─ commit-msg
├─ .nvmrc
├─ .prettierrc
├─ .vscode
│  ├─ launch.json
│  └─ tasks.json
├─ CHANGELOG.md
├─ LICENSE
├─ LICENSE.MD
├─ README.md
├─ commitlint.config.js
├─ docker-compose.yaml
├─ docker
│  ├─ Dockerfile
│  ├─ docker.env
│  ├─ postgres
│  │  └─ create-multiple-postgresql-databases.sh
│  └─ rabbitmq
│     ├─ definitions.json
│     └─ rabbitmq.conf
├─ nest-cli.json
├─ package.json
├─ scripts
│  └─ bump-release.js
├─ src
│  ├─ app.module.ts
│  ├─ config
│  │  ├─ index.ts
│  │  ├─ typeorm
│  │  │  └─ index.ts
│  │  └─ winston
│  │     └─ index.ts
│  ├─ core
│  │  ├─ core.module.ts
│  │  ├─ filters
│  │  │  └─ http-exception-filter.ts
│  │  └─ middlewares
│  │     └─ morgan.middleware.ts
│  ├─ environments
│  │  ├─ index.ts
│  │  └─ typeorm.ts
│  ├─ health
│  │  ├─ health.controller.ts
│  │  └─ health.module.ts
│  ├─ main.ts
│  ├─ modules
│  │  └─ tasks
│  │     ├─ controllers
│  │     │  ├─ tasks.controller.spec.ts
│  │     │  └─ tasks.controller.ts
│  │     ├─ dto
│  │     │  └─ task.dto.ts
│  │     ├─ entities
│  │     │  └─ task.entity.ts
│  │     ├─ services
│  │     │  ├─ tasks.service.spec.ts
│  │     │  └─ tasks.service.ts
│  │     └─ tasks.module.ts
│  └─ swagger
│     ├─ swagger.config.ts
│     ├─ swagger.interface.ts
│     └─ swagger.ts
├─ test
│  ├─ app.e2e-spec.ts
│  └─ jest-e2e.json
├─ tsconfig.build.json
├─ tsconfig.json
└─ yarn.lock
```

## Getting started

To get the project ready to develop or simple execute to see sample running, follow the below instructions:

```sh
git clone https://github.com/LucasMonteiroi/nestjs-backend-microservice.git
cd nestjs-backend-microservice/

# Yarn install packages and husky install
yarn && yarn prepare

# Get sample env to execute microservice
cp .env.example .env

# Change env vars if necessary
yarn start
```

If you want execute on docker just execute these commands too

```sh
# Copy env file to docker folder
cp .env ./docker/docker.env

# Run docker compose to run containers and dependencies
docker-compose up -d

# To stop containers run this code
docker-compose down

```

## Developing

Here we using a git flow strategy to develop [see here](https://www.gitkraken.com/learn/git/git-flow) more about it

### Built With

The main libraries used in this project are:

- [Nest Js](https://docs.nestjs.com/)
  - [@nestjs/axios](https://www.npmjs.com/package/@nestjs/axios)
  - [@nestjs/typeorm](https://www.npmjs.com/package/@nestjs/typeorm)
  - [@nestjs/terminus](https://www.npmjs.com/package/@nestjs/terminus)
  - [@nestjs/swagger](https://www.npmjs.com/package/@nestjs/swagger)
  - [@nestjs/config](https://www.npmjs.com/package/@nestjs/config)
- [Type ORM](https://www.npmjs.com/package/typeorm)
- [Winston](https://www.npmjs.com/package/winston)
- [Husky](https://www.npmjs.com/package/husky)
- [PG](https://www.npmjs.com/package/pg)
- [CZ Emoji](https://github.com/ngryman/cz-emoji)

### Building

To build docker image after changes, just run this:

```sh
docker-compose build backend-microservice

# After build, just run compose again
docker-compose up -d
```

### Deploying / Publishing

After make changes, to deploy, just make a pull request to branch `develop` and the github actions will deploy automatically, it's recommended, generate a new version before deploy

## Versioning

To generate a new version, just run this command passing the type of version `patch, minor or major`

```sh
yarn release patch # minor or major
```

This command will update version on `package.json`, generate the `CHANGELOG.md` based on [CZ Emoji Commits](https://github.com/ngryman/cz-emoji) and push to branch

## Configuration

Here is the default configurations based on docker.

```
PORT=3000
DATABASE_URL=
DATABASE_HOST=192.168.0.3
DATABASE_PORT=5432
POSTGRES_USER=root
POSTGRES_PASSWORD=root
POSTGRES_MULTIPLE_DATABASES=backend_microservice, backend_microservice_testing
```

## References

- [Project Guidelines](https://github.com/elsewhencode/project-guidelines)
- [12 Factor App](https://12factor.net/)
- [Git Flow](https://github.com/petervanderdoes/gitflow-avh)
- [Tree Generator](https://woochanleee.github.io/project-tree-generator/)

## Licensing

Nest Js Backend Microservice is [MIT licensed](https://github.com/LucasMonteiroi/nestjs-backend-microservice/blob/develop/LICENSE)
