"use client"

import zod from "zod"

// トップ画面のメールアドレス・パスワードの認証
export const UserCertificationValidations = zod.object({
  mailAddress:
    zod
      .string()
      .email(),

  passWord:
    zod
      .string()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}$/)
});