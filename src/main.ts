import "dotenv/config";
import { db } from "./drizzle/db";
import { UserPreferencesTable, UserTable } from "./drizzle/schema";
import { count, eq, gt } from "drizzle-orm";

async function main() {
  await db.delete(UserTable).where(eq(UserTable.age, 30));
  const users = await db.select().from(UserTable);

  console.log(users);
}

main();
