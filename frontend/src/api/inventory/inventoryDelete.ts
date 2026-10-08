"use client"

// 在庫削除
export const DeleteInventoryApi = async (id: number) => {
  console.log(`削除するid：${id}`);

  const result = await fetch("http://localhost:3001/inventory/delete", {
    method: "DELETE",
    headers: { "Content-Type" : "application/json" },
    body: JSON.stringify({id})
  });
};