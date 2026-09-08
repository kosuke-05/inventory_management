// Controllerが受け取る値の型
export type inventoryType = {
  name: string,
  count: number,
  memo?: string
  category: "food" | "drink" | "furniture" | "electronic" | "stationery" | "others"
};

// DBから取得したデータ形式
export type inventoryArrayType = {
  name: string,
  count: number,
  created_at: string,
  updated_at: string,
  deleted_at: string,
  memo?: string,
  category: "food" | "drink" | "furniture" | "electronic" | "stationery" | "others"
};