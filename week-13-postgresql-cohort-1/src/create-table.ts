import { getClient } from "./utils";

async function createTable() {
  const client = await getClient();
  const createUserTableQuery = `
        CREATE TABLE userstwopoint (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
    `;

  await client.query(createUserTableQuery); // to forward this query to the postgres server and execute it

  const createTodosQuery = `
        CREATE TABLE newtodos (
            id SERIAL PRIMARY KEY,
            title TEXT NOT NULL,
            description TEXT,
            user_id INTEGER REFERENCES userstwopoint (id),
            done BOOLEAN DEFAULT FALSE
        );
    `;

  await client.query(createTodosQuery);

  console.log("Table created successfully!");
}

createTable();

// To create tables and only run this file once, we can run the following command in the terminal:
// first: npm install -D typescript to install typescript as a dev dependency
// then: npm run build to compile the typescript file into javascript
// finally: node dist/create-table.js to run the compiled javascript file and create the tables in the database