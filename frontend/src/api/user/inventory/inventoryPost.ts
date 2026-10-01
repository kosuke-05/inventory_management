"use client"

import type { inventoryData } from "../../../types/inventory/inventoryTypes"

// 在庫情報の登録
export const InventoryPostApi = async (data: inventoryData) => {
  const res = await fetch("http://localhost:3001/inventory/registration", {
    method: "POST",
    headers: { "Content-Type" : "application/json"},
    body: JSON.stringify(data)
  });

  // 在庫登録に失敗した場合
  const result = res.json();
  if(!res.ok) throw new Error(result.message);

  return result;
};