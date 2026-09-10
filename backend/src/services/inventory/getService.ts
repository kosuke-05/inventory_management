import { GetInventoryRepository } from "../../repositories/inventory/getRepository";
import { inventoryArrayType } from "../../types/inventory/inventoryTypes";

export const GetInventoryService = async () => {
  const result: inventoryArrayType[] = await GetInventoryRepository();

  // デバッグ
  result.map((item) => {
    console.log(
      `
        在庫名：${item.name}
        在庫数：${item.count}
        登録日：${item.created_at}
        更新日：${item.updated_at}
        削除日：${item.deleted_at}
        備考欄：${item.memo}
        カテゴリ：${item.category}
      `
    )
  })

  // 取得に失敗した場合
  if(!result) return null;

  return result;
};