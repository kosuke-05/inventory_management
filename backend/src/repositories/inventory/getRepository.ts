import { pool } from "../../db/db";

export const GetInventoryRepository = async () => {
  const result = await pool.query(
    "SELECT * FROM inventories"
  );

  if(result.rowCount === 0) return null;

  return result.rows;
};