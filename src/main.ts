import "dotenv/config";
import { db } from "./drizzle/db";
import { UserTable } from "./drizzle/schema";

async function main() {
  await db.delete(UserTable);
  const user = await db.insert(UserTable).values([
    {
      name: "Kyle",
      age: 29,
      email: "test@test.com"
    }, { name: "Sally", age: 25, email: "test@test2.com" }
  ]).returning({
    id: UserTable.id,
    userName: UserTable.name,
  }).onConflictDoUpdate({
    target: UserTable.email,
    set: { name: "Updated Name" },
  });

  console.log(user);
}

main();