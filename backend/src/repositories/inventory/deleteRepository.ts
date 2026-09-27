import { pool } from "../../db/db"


export const DeleteInventoryRepository = async (id: number) => {
  const result = await pool.query(
    "DELETE FROM inventories WHERE id = $1",
    [id]
  );

  console.log(`削除件数：${result.rowCount}`);

  // 削除処理に失敗した場合
  if(result.rowCount === 0) return false;

  return true;
};