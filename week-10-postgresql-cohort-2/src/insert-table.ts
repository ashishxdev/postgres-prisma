// create a function to insert a user into the table make it async, make sure client.connect resolves before u do the insert

import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();

async function insertData() {
  const client = new Client({
    connectionString: process.env.CONNECTION_STRING,
  });

  try {
    await client.connect();
    const insertQuery = `
    INSERT INTO testing (username, email, password)
    VALUES ($1, $2, $3)
    RETURNING *;
    `;
    const info = ["badshah", "badshah@example.com", "password123"];
    const res = await client.query(insertQuery, info);
    console.log("Inserted user:", res.rows[0]);
  } catch (err) {
    console.error("Error inserting data:", err);
  } finally {
    await client.end(); // Close the client connection
  }
}

insertData();
