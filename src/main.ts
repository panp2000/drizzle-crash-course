import "dotenv/config";
import { db } from "./drizzle/db";
import { UserPreferencesTable, UserTable } from "./drizzle/schema";
import { count, eq, gt } from "drizzle-orm";

async function main() {
  const users = await db
    .select({
      id: UserTable.id,
      age: UserTable.age,
      emailUpdates: UserPreferencesTable.emailUpdates,
    })
    .from(UserTable)
    // .where(eq(UserTable.age, 29))
    .leftJoin(
      UserPreferencesTable,
      eq(UserPreferencesTable.userId, UserTable.id)
    );
  const users2 = await db
    .select({
      name: UserTable.name,
      count: count(UserTable.name)
    })
    .from(UserTable)
    .groupBy(UserTable.name)
    .having(columns => gt(columns.count, 1));

  console.log(users);
  console.log(users2);
}

main();
