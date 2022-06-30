import * as dotenv from 'dotenv';
dotenv.config();

const databaseUrl = String(process.env.DATABASE_URL || '');
const multipleDatabase = String(process.env.POSTGRES_MULTIPLE_DATABASES || '');

const databaseConfig = { url: databaseUrl };

const databases = multipleDatabase.split(',');
let databaseName = '';
let testDatabaseName = '';

if (databases.length > 1) {
  databaseName = databases[0];
  testDatabaseName = databases[1];
} else {
  databaseName = databases.shift();
}

const rawDatabaseConfig = {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT
    ? parseInt(process.env.DATABASE_PORT)
    : undefined,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: databaseName,
};

const rawTestDatabaseConfig = {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT
    ? parseInt(process.env.DATABASE_PORT)
    : undefined,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: testDatabaseName,
};

export const TYPEORM = {
  ...rawDatabaseConfig,
  ...databaseConfig,
};

export const TYPEORM_TEST = {
  ...rawTestDatabaseConfig,
  ...databaseConfig,
};
