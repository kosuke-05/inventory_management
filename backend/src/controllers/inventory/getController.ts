import { GetInventoryService } from "../../services/inventory/getService";

export const GetInventoryController = async () => {
  const result = await GetInventoryService();
};