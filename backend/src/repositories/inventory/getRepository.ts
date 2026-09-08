import { pool } from "../../db/db";

export const GetInventoryRepository = async () => {
  const result = await pool.query(
    "SELECT name, count, created_at, updated_at, deleted_at, memo, category FROM inventories"
  );

  return result.rows;
};