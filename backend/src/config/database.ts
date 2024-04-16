// backend/src/config/database.ts
import { createPool } from 'mariadb';

const pool = createPool({
  host: 'localhost',
  user: 'root', 
  password: 'root', 
  database: 'github_repos',
  connectionLimit: 5
});

export const getConnection = async () => {
  return await pool.getConnection();
};
