// write a function to create a users table in your database
import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();

const client = new Client({
  connectionString: process.env.CONNECTION_STRING,
});

async function createUsersTable() {
  await client.connect();
  const query = await client.query(`
    CREATE TABLE testing (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `);
}

createUsersTable();

// to check on terminal
// psql -h ep-twilight-glitter-aizufxne-pooler.c-4.us-east-1.aws.neon.tech -U neondb_owner -d neondb
