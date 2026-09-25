"use client"

import { Alert } from "@mui/material";
import { InventoryDeleteNoButton, InventoryDeleteYesButton } from "../../buttons/inventory/buttons";
import type { inventoryDeleteConfirmationAlertProps } from "../../../types/inventory/inventoryTypes";

// 在庫削除の確認ダイアログ
export const InventoryDeleteConfirmationAlert = ({
  onClick,
  setInventoryDetailDeleteAlertTrigger
}: inventoryDeleteConfirmationAlertProps) => {

  return (
    <Alert
      severity="warning"
      action={
        <>
          <InventoryDeleteYesButton
            onClick={onClick} />
          <InventoryDeleteNoButton
            setInventoryDetailDeleteAlertTrigger={setInventoryDetailDeleteAlertTrigger} />
        </>
      }
      sx={{
        position: "fixed",
        top: 120,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1500,
        boxShadow: 6
      }}>
      本当に削除しますか？
    </Alert>
  )
};