import { GetInventoryRepository } from "../../repositories/inventory/getRepository";

export const GetInventoryService = async () => {
  const result = await GetInventoryRepository();
};