import { Pool } from "pg";

// DBとの連携ファイル
export const pool = new Pool({
  host: "localhost",
  port: 5433,
  database: "inventory_management",
  user: "postgres",
  password: "practiceSQL"
});