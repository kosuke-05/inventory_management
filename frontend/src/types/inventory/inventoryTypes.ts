import zod from "zod";
import type { inventoryRegistrationValidation } from "../../schemas/user/inventory/inventoryRegistrationValidations";

// 在庫登録画面で使用するuseFormの型
export type inventoryRegistrationValidationType = zod.infer<typeof inventoryRegistrationValidation>;

// テキストフィールドの型（propsでも使い回し）
export type inventoryFieldsType = {
  name: "name" | "count" | "memo",
  label: "在庫名" | "在庫数" | "備考欄",
  placeholder?: string
};