import { getClient } from "./utils";

async function createEntries() {
  const client = await getClient();
  const insertUserText =
    "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id";
  /* why we can't do this: 
    const insertUserText =
        "INSERT INTO users (email, password) VALUES ("john.doe@gmail.com", "hashed_password_here") RETURNING id"; 
    why we separate the query and values it's due to sql injection
    it means if a user wrote in email "john.doe@gmail.com AND DROP TABLE users;" if we send this query to our database, it would execute the DROP TABLE command as well, which is a security vulnerability. You are letting user inject sql into your backend that's why we passed uservalues separately
    If use values under userValues like this: "john.do11e@gmail2.com DROP TABLE users;" it will get stored with this name instead of executing the DROP TABLE command */
  const userValues = ["john.do11e@gmail2.com", "hashed_password_here"];

  let response = await client.query(insertUserText, userValues);
  const insertTodoText =
    "INSERT INTO todos (title, description, user_id, done) VALUES ($1, $2, $3, $4) RETURNING id";
  const todoValues = [
    "Buy groceries",
    "Milk, bread, and eggs",
    response.rows[0].id, 
    // this means we are getting the id of the user we just inserted and using it as the user_id for the todo entry    

    false,
  ];
  await client.query(insertTodoText, todoValues);

  console.log("Entries created!");
}

createEntries();
