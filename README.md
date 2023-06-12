# Debugging the annoyances of `Prisma`

## Does the schema drift issue arise from the `prisma migrate deploy` command?

1. `npm install`
2. `npx prisma migrate dev` to add the `foo` table
3. Checkout to `add-bar-table` branch
4. `npx prisma migrate dev` to add the `bar` table
5. Checkout to `add-baz-table` branch
6. `npx prisma migrate deploy` to see that the `baz` table is added, without the schema drift issues arising from `add-bar-table` branch.

So potentially we can use `prisma migrate deploy` to deploy the schema changes in production during CI/CD, since it does not care what the current state of the database is, and will just deploy the schema changes.

## Does the database state affect `npx prisma generate` to generate the prisma client?

1. After having done the above, with the `baz` table added, checkout to `main` again.
2. `npx prisma generate` to generate the prisma client, works fine.
3. `node index.js` to see that the `foo` table is queried, works fine.

This means that as long as the actual code does not refer to tables that do not exist, the prisma client will be generated fine, and can be used to query the database.
