"use client"

import { Dialog, DialogActions, DialogTitle, Typography } from "@mui/material";
import { InventoryDeleteYesButton } from "../../buttons/inventory/buttons";
import { InventoryStore } from "../../../stores/inventory/inventoryStore";

// 在庫削除の確認ダイアログ
export const InventoryDeleteConfirmationDialog = () => {
  // ストアから取得
  const inventoryDeleteConfirmationDialog = InventoryStore((state) => state.inventoryDeleteConfirmationDialog);
  const setInventoryDeleteConfirmationDialog = InventoryStore((state) => state.setInventoryDeleteConfirmationDialog);

  return (
    <Dialog
      open={inventoryDeleteConfirmationDialog}
      onClose={() => setInventoryDeleteConfirmationDialog(false)}>
      <DialogTitle>
        <Typography variant="h6">在庫情報を削除しますか？</Typography>
      </DialogTitle>
      <DialogActions>
        <InventoryDeleteYesButton />
      </DialogActions>
    </Dialog>
  )
};