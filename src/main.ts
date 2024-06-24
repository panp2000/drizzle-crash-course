import "dotenv/config";
import { db } from "./drizzle/db";
import { UserPreferencesTable, UserTable } from "./drizzle/schema";
import { asc, desc, sql } from "drizzle-orm";

async function main() {
  // await db.insert(UserPreferencesTable).values({
  //   emailUpdates: true,
  //   userId: "6a374f77-c085-4683-ad49-08abb589e3f3",
  // });
  const users = await db.query.UserTable.findMany({
    // columns: { name: true, email: true, id: true },
    columns: { age: true, id: true },
    // extras: { lowerCaseName: sql<string>`lower(${UserTable.name})`.as("lowerCaseName") },
    // limit: 1,
    // offset: 1,
    // with: { preferences: true },
    // with: { preferences: {
    //   columns: {
    //     emailUpdates: true,
    //   }
    // }},
    with: {
      posts: {
        with: { postCategories: true },
      }
    },
    // orderBy: asc(UserTable.age)
    // orderBy: desc(UserTable.age)
    // orderBy: (table, {asc}) => asc(table.age),
    // where: (table, funcs) => funcs.eq(table.age, 25),
    // where: (table, funcs) => funcs.between(table.age, 20, 25),
    where: (table, funcs) => funcs.gt(table.age, 20),
  });

  console.log(users);
}

main();