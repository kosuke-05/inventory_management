import zod from "zod";
import type { inventoryRegistrationValidation } from "../../schemas/user/inventory/inventoryRegistrationValidations";

// 在庫登録画面で使用するuseFormの型
export type inventoryRegistrationValidationType = zod.infer<typeof inventoryRegistrationValidation>;

// テキストフィールドの型（propsでも使い回し）
export type inventoryFieldsType = {
  name: "name" | "count" | "category" | "memo",
  label: "在庫名" | "在庫数" | "在庫のカテゴリ" | "備考欄",
  placeholder?: string,
  category?: ["食品", "飲料水", "家具", "家電", "文房具", "その他"]
  component?: "textField" | "selectBox",
  categoryLabel?: categoryType[]
};

// 在庫カテゴリで使用する型
export type categoryType = {
  en: "food" | "drink" | "furniture" | "electronic" | "stationery" | "others",
  ja: "食品" | "飲料" | "家具" | "家電" | "文房具" | "その他"
};

// 登録される在庫情報
export type inventoryData = {
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

// InventoryCardのprops
export type inventoryCardProps = {
  name: string,
  count: number,
  created_at: string,
  updated_at: string
  deleted_at: string,
  category: "food" | "drink" | "furniture" | "electronic" | "stationery" | "others"
  onClick: () => void
};

// カテゴリラベル
export type categoryLabelType = {
  food: "食料",
  drink: "飲料",
  furniture: "家具",
  electronic: "家電",
  stationery: "文房具",
  others: "その他"
};

// 詳細ボタンのprops
export type inventoryDetailButtonProps = {
  onClick: () => void
};

// 詳細ダイアログのprops
export type inventoryDetailDialogProps = {
  created_at: string,
  updated_at: string
  deleted_at: string,
  memo?: string
}