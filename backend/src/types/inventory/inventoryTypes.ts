// Controllerが受け取る値の型
export type inventoryType = {
  name: string,
  count: number,
  memo?: string
  category: "food" | "drink" | "furniture" | "electronic" | "stationery" | "others"
};