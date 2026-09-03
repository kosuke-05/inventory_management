"use client"

import type { inventoryData } from "../../../types/inventory/inventoryTypes"

// 在庫情報の登録
export const InventoryPostApi = async (data: inventoryData) => {
  const result = await fetch("http://localhost:3001/inventory/registration", {
    method: "POST",
    headers: { "Content-Type" : "application/json"},
    body: JSON.stringify(data)
  });

  return result.json();
};