"use client"

// 在庫情報の取得
export const GetInventoryApi = async () => {
  const result = await fetch("http://localhost:3001/inventory/get", {
    method: "GET"
  });

  return result.json();
};