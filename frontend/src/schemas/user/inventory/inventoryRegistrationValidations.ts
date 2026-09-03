"use client"

import zod from "zod";

// 在庫登録のバリデーション
export const inventoryRegistrationValidation = zod.object({
  name:
    zod
    .string()
    .max(15, {
      message: "15文字以内で登録して下さい。"
    }),

  count:
    zod
    .number({
      message: "半角数字で入力して下さい。"
    })
    .min(0, {
      message: "0以下では登録できません。"
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
    .enum(["food", "drink", "furniture", "electronic", "stationery", "others"], {
      message: "いずれかを選択して下さい。"
    })
});