import { DeleteInventoryRepository } from "../../repositories/inventory/deleteRepository"

export const DeleteInventoryService = async (id: number) => {
  const result: boolean = await DeleteInventoryRepository(id);

  return result;
};