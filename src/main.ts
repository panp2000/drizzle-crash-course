import "dotenv/config";
import { db } from "./drizzle/db";
import { UserPreferencesTable, UserTable } from "./drizzle/schema";
import { count, eq, gt } from "drizzle-orm";

async function main() {
  // const users = await db.select().from(UserTable);
  const users = await db
    .update(UserTable)
    .set({
      age: 29
    })
    .where(eq(UserTable.age, 30));

  console.log(users);
}

main();
