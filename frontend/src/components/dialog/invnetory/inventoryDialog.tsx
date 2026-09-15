"use client"

import { Dialog, Stack, Typography } from "@mui/material";
import { InventoryStore } from "../../../stores/inventory/inventoryStore";

// 在庫の詳細情報を表示するダイアログ
export const InventoryDetailDialog = () => {
  // ストアから取得
  const inventoryDetailDialog = InventoryStore((state) => state.inventoryDetailDialog);
  const setInventoryDetailDialog = InventoryStore((state) => state.setInventoryDetailDialog);
  const inventoryData = InventoryStore((state) => state.inventoryData);

  return (
    <Dialog
      open={inventoryDetailDialog}
      onClose={() => setInventoryDetailDialog(false)}
      sx={{
        p: 2
      }}>
      <Typography variant="h6">詳細情報</Typography>
      <Stack direction="column" spacing={1}>
        <Typography variant="body2">登録日：{inventoryData.created_at}</Typography>
        <Typography variant="body2">更新日：{inventoryData.updated_at}</Typography>
        <Typography variant="body2">削除日：{inventoryData.deleted_at}</Typography>
        <Typography variant="body2">
          備考欄：{inventoryData.memo ? inventoryData.memo : "特になし"}
        </Typography>
      </Stack>
    </Dialog>
  )
};