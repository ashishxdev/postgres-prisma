import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client.js";
import { Pool } from "pg";
import "dotenv/config";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// Insert a new user into the database
// async function insertUser(
//   username: string,
//   password: string,
//   firstName: string,
//   lastName: string,
// ) {
//   const res = await prisma.user.create({
//     data: {
//       email: username,
//       password,
//       firstName,
//       lastName,
//     },
//     select: {
//       id: true,
//       password: true,
//     },
//   });
//   console.log(res);
// }

// insertUser("Mohan", "password", "Mohan", "Kaint");
// insertUser("Sohan", "password", "Sohan", "Rawat");
// insertUser("Rohan", "password", "Rohan", "Sherawat");

// Update a user in the database
// interface UpdateParams {
//   firstName: string;
//   lastName: string;
// }

// async function updateUser(
//   username: string,
//   { firstName, lastName }: UpdateParams,
// ) {
//   const res = await prisma.user.update({
//     where: {
//       email: username,
//     },
//     data: {
//       firstName,
//       lastName,
//     },
//   });
//   console.log(res);
// }

// updateUser("Aashish", {
//   firstName: "Oye",
//   lastName: "Badshah",
// });

// Get a user from database
// async function getUser(username: string) {
//   const res = await prisma.user.findFirst({
//     where: {
//       email: username,
//     },
//     select: {
//       id: true,
//       password: true,
//       firstName: true,
//       lastName: true,
//     },
//   });
//   return res;
// }
// getUser("Aashish").then((userData) => {
//   console.log("User data retrieved successfully:", userData);
// });

// take and skip
// async function main() {
//   let res = await prisma.user.findMany({
//     take: 2,
//     skip: 3,
//   });
//   console.log(res);
// }
// main();

// delete
async function deleteuser(username: string) {
  let res = await prisma.user.delete({
    where: {
      email: username,
    },
    select: {
      email: true,
      firstName: true,
      lastName: true,
      password: true,
    },
  });
  console.log("Delete User", res);
}
deleteuser("Sohan");
