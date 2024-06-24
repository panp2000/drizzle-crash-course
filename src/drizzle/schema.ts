import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const UserTable = pgTable("user", {
  id: uuid("id").primaryKey().defaultRandom(),
  // public_id: serial("id2").primaryKey()
  name: varchar("name", { length: 255 }).notNull(),
});