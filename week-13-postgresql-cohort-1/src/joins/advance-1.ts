import { getClient } from "../utils";

// Get all todos for a give user
// This needs to ensure that every user comes atleast once
async function getUserAndTodosWithJoin(userId: number) {
  const client = await getClient();

  const joinQuery = `
        SELECT users.*, todos.title, todos.description, todos.done
        FROM users
        RIGHT JOIN todos ON users.id = todos.user_id
        WHERE users.id = $1;
    `;

  // 1, 2
  // 1 -> 3 Todos
  // 2 -> 2 Todo

  // 5 Rows
  // email, password, title, description, done
  // 1, 1
  // 1, 2
  // 1, 3
  // 2, 4
  // 2, 5

  // If left join it will return this if there are todos for a user
  // harkirat@gmail.com, password, Go to gym, Go to gym, false

  // If left join it will return this if no todos for a user
  // raman@gmail.com, password, null, null, null
  // If not used left join it will return this if there are no todos for a user
  // ----

  const res = await client.query(joinQuery, [userId]);
  const results = res.rows;

  console.log("User and Todos:", results);
}

getUserAndTodosWithJoin(1);
