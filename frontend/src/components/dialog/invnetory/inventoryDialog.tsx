"use client"

import { Dialog, Stack, Typography } from "@mui/material";
import { InventoryStore } from "../../../stores/inventory/inventoryStore";
import type { inventoryDetailDialogProps } from "../../../types/inventory/inventoryTypes";

// 在庫の詳細情報を表示するダイアログ
export const InventoryDetailDialog = ({
  created_at,
  updated_at,
  deleted_at,
  memo
}: inventoryDetailDialogProps) => {
  // ストアから取得
  const inventoryDetailDialog = InventoryStore((state) => state.inventoryDetailDialog);
  const setInventoryDetailDialog = InventoryStore((state) => state.setInventoryDetailDialog);

  return (
    <Dialog
      open={inventoryDetailDialog}
      onClose={() => setInventoryDetailDialog(false)}
      sx={{
        p: 2
      }}>
      <Typography variant="h6">詳細情報</Typography>
      <Stack direction="column" spacing={1}>
        <Typography variant="body2">登録日：{created_at}</Typography>
        <Typography variant="body2">更新日：{updated_at}</Typography>
        <Typography variant="body2">削除日：{deleted_at}</Typography>
        <Typography variant="body2">
          備考欄：{memo ? memo : "特になし"}
        </Typography>
      </Stack>
    </Dialog>
  )
};