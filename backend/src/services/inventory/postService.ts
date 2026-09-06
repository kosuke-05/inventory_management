import { PostRepository } from "../../repositories/inventory/postRepository";
import { inventoryType } from "../../types/inventory/inventoryTypes";


export const PostInventoryService = async (data: inventoryType) => {
  // DBへの登録
  const result = await PostRepository(data);

  // 正常に登録できなかった場合
  if(!result) {
    return null;
  }

  // デバッグ
  console.log(
    `
      在庫名：${result.name},
      在庫数：${result.count},
      登録日：${result.created_at}
      更新日：${result.updated_at}
      備考欄：${result.memo}
      カテゴリ：${result.category}
    `
  );

  return result.json();
};