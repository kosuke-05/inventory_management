"use client"

import zod from "zod";

// ユーザー新規登録
export const UserRegistrationValidation = zod.object({
  name:
    zod
      .string()
      .min(2, {
        message: "2文字以上入力して下さい"
      }),

  mainAddress:
    zod
      .string()
      .email(),

  passWord:
    zod
      .string()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}$/)
});