import { Request, Response } from "express";
import { GetInventoryService } from "../../services/inventory/getService";
import { inventoryArrayType } from "../../types/inventory/inventoryTypes";

export const GetInventoryController = async (req: Request, res: Response) => {
  const result: inventoryArrayType[] | null = await GetInventoryService();

  if(!result) {
    res.status(500).json({
      message: "在庫情報が正常に取得できませんでした。"
    })
  }

  return res.status(200).json(result);
};