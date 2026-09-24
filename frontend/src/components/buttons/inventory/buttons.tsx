"use client"

import { Button } from "@mui/material"
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { inventoryDetailButtonProps, inventoryDetailDeleteButtonProps } from "../../../types/inventory/inventoryTypes";
import { InventoryStore } from "../../../stores/inventory/inventoryStore";

// 在庫登録画面に遷移するボタン
export const InventoryRegistrationButton = () => {
  // 画面遷移
  const navigate = useNavigate();

  return (
    <Button
      variant="text"
      onClick={() => navigate("/inventory/registration")}
      sx={{ color: "white"}}>
      在庫登録
    </Button>
  )
};

// 在庫登録画面で在庫情報を送信するボタン
export const InventorySubmitButton = () => {
  // RHFから取得
  const { formState: { isValid, isDirty } } = useFormContext();

  return (
    <Button
      variant="contained"
      type="submit"
      disabled={!isValid || !isDirty }>
      送信
    </Button>
  )
};

// 在庫情報の詳細ボタン
export const InventoryDetailButton = ({
  id,
  created_at,
  updated_at,
  deleted_at,
  memo,
  onClick
}: inventoryDetailButtonProps) => {
  // ストアから取得
  const setInventoryData = InventoryStore((state) => state.setInventoryData);

  return (
    <Button
      variant="text"
      onClick={() => {
        setInventoryData({
          id,
          created_at,
          updated_at,
          deleted_at,
          memo
        }),
        onClick();
      }}>
      詳細
    </Button>
  )
};

/**
 * 在庫詳細ダイアログ内の削除ボタン
 * ①DB内に登録している在庫情報自体を削除するAPI通信
 */
export const InventoryDetailDeleteButton = ({
  id
}: inventoryDetailDeleteButtonProps) => {
  // ストアから取得
  const setInventoryId = InventoryStore((state) => state.setInventoryData);
  const setInventoryDeleteConfirmationDialog = InventoryStore((state) => state.setInventoryDeleteConfirmationDialog);

  return (
    <Button
      variant="contained"
      onClick={
        () => {
          if(id !== null) setInventoryId(id);
          setInventoryDeleteConfirmationDialog(true);
        }
      }>
      削除
    </Button>

  )
};

// 在庫削除確認ダイアログ内の【はい】ボタン
export const InventoryDeleteYesButton = () => {

  return (
    <Button
      variant="contained">
      はい
    </Button>
  )
};