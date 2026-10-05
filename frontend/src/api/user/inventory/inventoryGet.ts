"use client"

// 在庫情報の取得
export const GetInventoryApi = async () => {
  const res = await fetch("http://localhost:3001/inventory/get", {
    method: "GET"
  });

  const result = await res.json();

  // 取得に失敗した場合
  if(!res.ok) throw new Error(result.message);

  return result;
};