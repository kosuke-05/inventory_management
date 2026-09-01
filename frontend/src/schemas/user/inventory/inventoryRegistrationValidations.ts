"use client"

import zod from "zod";

// 在庫登録のバリデーション
export const inventoryRegistrationValidation = zod.object({
  name:
    zod
    .string()
    .min(15, {
      message: "15文字以内で登録して下さい。"
    }),

  count:
    zod
    .number({
      message: "半角数字で入力して下さい。"
    }),

  memo:
    zod
    .string()
    .max(30, {
      message: "30文字以内で登録して下さい。"
    })
    .optional(),

  category:
    zod
    .enum(["食品", "飲料水", "家具", "家電", "文房具", "その他"], {
      message: "いずれかを選択して下さい。"
    })
});