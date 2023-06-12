import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// get the foo with id 1, if it exists

const foo = await prisma.foo.findUnique({
  where: { id: 1 },
});

console.log(foo);
