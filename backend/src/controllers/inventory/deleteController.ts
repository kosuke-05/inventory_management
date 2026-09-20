import { Request, Response } from "express";
import { DeleteInventoryService } from "../../services/inventory/deleteService";

export const DeleteInventoryController = async (req: Request, res: Response) => {
  const id = req.body;

  // 正常に受け取れなかった場合
  if(!id) {
    return res.status(401).json({
      message: "値を正常に受け取れませんでした。"
    })
  };

  const result: boolean = await DeleteInventoryService(id);

  if(!result) {
    res.status(500).json({
      message: "削除処理に失敗しました。"
    })
  };

  return res.status(200);
};