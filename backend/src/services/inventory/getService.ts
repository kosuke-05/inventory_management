import { GetInventoryRepository } from "../../repositories/inventory/getRepository";
import { inventoryArrayType } from "../../types/inventory/inventoryTypes";

export const GetInventoryService = async () => {
  const result: inventoryArrayType[] = await GetInventoryRepository();

  // 取得に失敗した場合
  if(!result) return null;

  return result;
};