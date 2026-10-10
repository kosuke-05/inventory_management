import { PostRepository } from "../../repositories/inventory/postRepository";
import { inventoryType } from "../../types/inventory/inventoryTypes";


export const PostInventoryService = async (data: inventoryType) => {
  // DBへの登録
  return await PostRepository(data);
};