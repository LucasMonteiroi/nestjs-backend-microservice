import * as dotenv from 'dotenv';
dotenv.config();

const url = String(process.env.POSTGRES_URL || '');

const databaseConfig = url
  .split(' ')
  .reduce((acc: { [key: string]: unknown }, curr) => {
    const [name, value] = curr.split('=');

    if (name === 'user') {
      acc.username = value;
    } else if (name === 'port') {
      acc[name] = parseInt(value, 10);
    } else {
      acc[name] = value;
    }

    return acc;
  }, {});

const rawDatabaseConfig = {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT
    ? parseInt(process.env.DATABASE_PORT)
    : undefined,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_MULTIPLE_DATABASES.split(',')[0],
};

export const TYPEORM = {
  ...rawDatabaseConfig,
  ...databaseConfig,
};
