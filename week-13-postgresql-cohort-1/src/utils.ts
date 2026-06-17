import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();

export async function getClient() {
  const client = new Client(process.env.CONNECTION_STRING);
  await client.connect();
  return client;
}

/* I can connect to the server by 
First: Installing libpq-dev package in my system by running the following command in the terminal: brew install libpq-dev
Second: running this command in terminal:
brew link --force libpq to link the package to my system
Finally, I can connect to the server by running the following command in the terminal:
psql -h "ep-twilight-glitter-aizufxne-pooler.c-4.us-east-1.aws.neon.tech" -p 5432 -U neondb_owner -d neondb 
It asks for the password 
It gets connected then i just write \dt; to list the tables
I can create table in this terminal as well*/
