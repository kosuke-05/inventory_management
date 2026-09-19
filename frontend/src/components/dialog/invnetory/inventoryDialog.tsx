"use client"

import { Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from "@mui/material";
import { InventoryStore } from "../../../stores/inventory/inventoryStore";
import { InventoryDetailDeleteButton } from "../../buttons/inventory/buttons";
import type { inventoryDeleteProps } from "../../../types/inventory/inventoryTypes";

// 在庫の詳細情報を表示するダイアログ
export const InventoryDetailDialog = ({
  onClick
}: inventoryDeleteProps) => {
  // ストアから取得
  const inventoryDetailDialog = InventoryStore((state) => state.inventoryDetailDialog);
  const setInventoryDetailDialog = InventoryStore((state) => state.setInventoryDetailDialog);
  const inventoryData = InventoryStore((state) => state.inventoryData);

  return (
    <Dialog
      open={inventoryDetailDialog}
      onClose={() => setInventoryDetailDialog(false)}>
      <DialogTitle>
        <Typography variant="h6">詳細情報</Typography>
      </DialogTitle>
      <DialogContent>
        <Stack direction="column" spacing={1}>
          <Typography variant="body2">登録日：{inventoryData.created_at}</Typography>
          <Typography variant="body2">更新日：{inventoryData.updated_at}</Typography>
          <Typography variant="body2">削除日：{inventoryData.deleted_at}</Typography>
          <Typography variant="body2">
            備考欄：{inventoryData.memo ? inventoryData.memo : "特になし"}
          </Typography>
        </Stack>
      </DialogContent>
      <DialogActions>
        <InventoryDetailDeleteButton
          id={inventoryData.id}
          onClick={onClick} />
      </DialogActions>
    </Dialog>
  )
};