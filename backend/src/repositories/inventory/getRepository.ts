import { pool } from "../../db/db";

export const GetInventoryRepository = async () => {
  const result = await pool.query(
    "SELECT * FROM inventories"
  );

  return result.rows;
};