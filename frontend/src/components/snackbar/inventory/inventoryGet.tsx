"use client"

import { Alert, Snackbar } from "@mui/material";
import type { inventoryGetSnackBarProps } from "../../../types/inventory/inventoryTypes";

// 在庫取得に失敗した際のスナックバー
export const InventoryGetSnackBar = ({
  error
}: inventoryGetSnackBarProps) => {

  return (
    <Snackbar
      open={!!error}
      autoHideDuration={5000}>
      <Alert severity="warning">
        {error?.message}
      </Alert>
    </Snackbar>
  )
};