import { Pool } from "pg";

let conn: any;

if (!conn) {
  conn = new Pool({
    user: "postgres",
    password: "batalla",
    host: "localhost",
    port: 5432,
    database: "postgres",
  });
}

export { conn };
