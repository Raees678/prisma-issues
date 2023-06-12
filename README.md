# Debugging the annoyances of `Prisma`

## Does the schema drift issue arise from the `prisma migrate deploy` command?

1. `npm install`
2. `npx prisma migrate dev` to add the `foo` table
3. Checkout to `add-bar-table` branch
4. `npx prisma migrate dev` to add the `bar` table
5. Checkout to `add-baz-table` branch
6. `npx prisma migrate deploy` to see that the `baz` table is added, without the schema drift issues arising from `add-bar-table` branch.

So potentially we can use `prisma migrate deploy` to deploy the schema changes in production during CI/CD, since it does not care what the current state of the database is, and will just deploy the schema changes.
