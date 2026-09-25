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
  id: number,
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
  id: number,
  name: string,
  count: number,
  created_at: string,
  updated_at: string
  deleted_at: string,
  memo?: string
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
  id: number,
  created_at: string,
  updated_at: string,
  deleted_at: string,
  memo?: string,
  onClick: () => void
};

// 詳細ダイアログのprops
export type inventoryDetailDialogProps = {
  created_at: string,
  updated_at: string
  deleted_at: string,
  memo?: string
};

// 在庫の詳細情報
export type inventoryDataType = {
  id: number,
  created_at: string,
  updated_at: string
  deleted_at: string,
  memo: string | undefined
};

// 在庫ダイアログのpropsの型
export type inventoryDeleteProps = {
  onClick: () => void
};

// 在庫ダイアログ内の削除ボタンのprops
export type inventoryDetailDeleteButtonProps = {
  id: number | null,
  setInventoryDetailDialog: (bool: boolean) => void
};

// 在庫削除確認ダイアログのprops
export type inventoryDeleteConfirmationAlertProps = {
  onClick: () => void,
  setInventoryDetailDeleteAlertTrigger: (bool: boolean) => void
};

// 削除確認【はい】ボタンのprops
export type inventoryDeleteYesButtonProps = {
  onClick: () => void
};

// 削除確認【いいえ】ボタンのprops
export type inventoryDeleteNoButtonProps = {
  setInventoryDetailDeleteAlertTrigger: (bool: boolean) => void
};
