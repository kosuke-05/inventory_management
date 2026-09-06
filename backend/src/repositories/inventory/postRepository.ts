import { pool } from "../../db/db"
import { inventoryType } from "../../types/inventory/inventoryTypes"

export const PostRepository = async (data: inventoryType) => {
  const result = await pool.query(
    "INSERT INTO inventories (name, count, created_at, updated_at, memo, category) values ($1, $2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, $3, $4) RETURNING *",
    [data.name, data.count, data.memo, data.category]
  );

  return result.rows[0];
};