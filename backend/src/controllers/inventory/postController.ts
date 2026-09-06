import { Request, Response } from "express";
import { inventoryType } from "../../types/inventory/inventoryTypes";
import { PostInventoryService } from "../../services/inventory/postService";

export const PostInventoryController = async (req: Request, res: Response) => {
  // 値を取得
  const inventoryData: inventoryType = req.body;
  const { name, count, category } = inventoryData;

  // データが正確でない場合、401を返す
  if(!name || !count || !category) {
    return res.status(401).json({
      message: "在庫データの登録に不備がありました。"
    })
  };

  const result = await PostInventoryService(inventoryData);

  // 登録失敗
  if(!result) {
    return res.status(500).json({
      message: "DBへの登録に失敗しました。"
    })
  }

  return res.status(201);
};