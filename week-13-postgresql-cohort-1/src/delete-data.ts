import { getClient } from "./utils";

async function deleteTodo(todoId: number) {
  const client = await getClient();

  const deleteTodoText = "DELETE FROM todos WHERE id = $1";
  await client.query(deleteTodoText, [todoId]);

  console.log(`Todo with ID ${todoId} deleted!`);
}

const todoIdToDelete = 1;
deleteTodo(todoIdToDelete);

// In real world we never delete data from database, we just mark it as deleted. We can add a column called is_deleted and set it to true when we want to delete a record. This way we can keep the data in the database and still be able to filter it out when we query the data. This is called soft delete.