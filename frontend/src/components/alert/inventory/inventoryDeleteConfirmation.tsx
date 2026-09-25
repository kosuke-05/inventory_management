"use client"

import { Alert } from "@mui/material";
import { InventoryDeleteYesButton } from "../../buttons/inventory/buttons";
import type { inventoryDeleteConfirmationAlertProps } from "../../../types/inventory/inventoryTypes";

// 在庫削除の確認ダイアログ
export const InventoryDeleteConfirmationAlert = ({
  onClick
}: inventoryDeleteConfirmationAlertProps) => {

  return (
    <Alert
      severity="warning"
      action={
        <>
          <InventoryDeleteYesButton
            onClick={onClick} />
        </>
      }>
      本当に削除しますか？
    </Alert>
  )
};