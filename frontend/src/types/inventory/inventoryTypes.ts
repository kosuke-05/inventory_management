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
  categoryLabel?: categoryLabelType[]
};

// 在庫カテゴリで使用する型
export type categoryLabelType = {
  en: "food" | "drink" | "furniture" | "electronic" | "stationery" | "others",
  ja: "食品" | "飲料" | "家具" | "家電" | "文房具" | "その他"
};