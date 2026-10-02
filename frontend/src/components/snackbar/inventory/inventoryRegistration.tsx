"use client"

import { Alert, Snackbar } from "@mui/material";
import { InventoryStore } from "../../../stores/inventory/inventoryStore";

// 在庫登録に失敗した際のエラーメッセージ
export const InventoryRegistrationSnackBar = () => {
  // ストアから取得
  const errorMessage = InventoryStore((state) => state.errorMessage);
  const resetErrorMessage = InventoryStore((state) => state.resetErrorMessage);

  return (
    <Snackbar
      open={!!errorMessage}
      autoHideDuration={5000}
      onClose={resetErrorMessage}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center"
      }}>
      <Alert severity="warning">
        {errorMessage}
      </Alert>
    </Snackbar>
  )
};