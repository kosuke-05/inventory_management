"use client"

// 在庫情報編集のapi
export const UpdateInventoryApi = async (id: number) => {
  const res = await fetch("http://localhost:3001/inventory/update", {
    method: "PUT",
    headers: { "Content-Type" : "application/json" },
    body: JSON.stringify({ id })
  });
};