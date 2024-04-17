import { createPool, Pool, PoolConnection } from 'mariadb';

const connectionLimit = process.env.DB_CONNECTION_LIMIT ? parseInt(process.env.DB_CONNECTION_LIMIT, 10) : 5;

const pool: Pool = createPool({
  host: process.env.DB_HOST, 
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD, 
  database: process.env.DB_DATABASE,
  connectionLimit: connectionLimit
});

export const getConnection = async (): Promise<PoolConnection> => {
  return await pool.getConnection();
};
