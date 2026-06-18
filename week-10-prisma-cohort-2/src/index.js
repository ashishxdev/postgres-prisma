import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client.js";
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });
async function insertUser(username, password, firstName, lastName) {
    const res = await prisma.user.create({
        data: {
            email: username,
            password,
            firstName,
            lastName,
        },
    });
    console.log(res);
}
insertUser("Aashish", "password", "Aashish", "Rana");
//# sourceMappingURL=index.js.map