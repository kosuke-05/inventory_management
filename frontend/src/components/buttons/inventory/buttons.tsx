"use client"

import { Button } from "@mui/material"
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
}