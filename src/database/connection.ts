import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const createConnection = async () => {
  const client = new Pool({
    host: "localhost",
    port: 5432,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_BASENAME,
  });

  await client.connect();
  return client;
};

export default createConnection;
