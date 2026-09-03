"use client"

import { Button } from "@mui/material"
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom"

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